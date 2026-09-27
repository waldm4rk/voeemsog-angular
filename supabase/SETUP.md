# Supabase setup

1. Create a Supabase project and copy its Project URL and publishable key into src/environments/environment.ts.
   Keep the publishable key in the frontend; never put a secret/service-role key there.
2. Install the Supabase CLI and link this repository with: supabase link --project-ref <project-ref>.
3. Apply the schema and the supplied SQL dump data with: supabase db push --include-seed.
   The seed adds the existing rows in foreign-key order. Tables absent from the dump
   (album, track, donations, donation_goals) are created empty.
4. If Ko-fi donation progress should keep working, configure the verification token as a function secret,
   then deploy supabase/functions/kofi-webhook:
   supabase secrets set KOFI_VERIFICATION_TOKEN=<token>
   supabase functions deploy kofi-webhook
   Set the Ko-fi webhook URL to
   https://<project-ref>.supabase.co/functions/v1/kofi-webhook.
   The function uses the server-provided SUPABASE_SERVICE_ROLE_KEY only inside the function.
5. The currently referenced images and backgrounds are not present in this repository or the old backend
   folder. Restore those files from a backup before moving them into a public Supabase Storage bucket.
   Keep audio hosted by SoundCloud where track rows contain SoundCloud URLs.

Public reads are allowed for content tables through RLS. Anonymous writes are denied.
The donations table has no public read policy; only the active donation goal is public.
