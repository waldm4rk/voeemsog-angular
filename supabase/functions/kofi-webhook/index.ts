import { createClient } from 'npm:@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
const verificationToken = Deno.env.get('KOFI_VERIFICATION_TOKEN');

Deno.serve(async (request: Request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  let data: Record<string, unknown>;
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const raw = contentType.includes('application/json')
      ? await request.text()
      : new URLSearchParams(await request.text()).get('data')
        ?? new URL(request.url).searchParams.get('data')
        ?? '';
    data = JSON.parse(raw);
  } catch {
    // Ko-fi treats a 200 response as acknowledged and does not retry malformed events.
    return new Response(null, { status: 200 });
  }

  if (!verificationToken || data['verification_token'] !== verificationToken) {
    return new Response(null, { status: 401 });
  }

  if (data['type'] !== 'Donation' && data['type'] !== 'Subscription') {
    return new Response(null, { status: 200 });
  }

  const amount = Number(data['amount']);
  if (!Number.isFinite(amount) || amount <= 0) return new Response(null, { status: 200 });

  const isPublic = data['is_public'] !== false;
  const { error } = await supabase.rpc('record_kofi_donation', {
    p_amount: amount,
    p_name: isPublic ? String(data['from_name'] ?? 'Anonymous') : 'Anonymous',
    p_message: isPublic ? String(data['message'] ?? '') : 'None',
  });

  if (error) console.error('Could not record Ko-fi donation', error.message);
  return new Response(null, { status: 200 });
});
