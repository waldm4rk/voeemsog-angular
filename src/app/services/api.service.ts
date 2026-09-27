import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiResponse {
  code: string;
  floor: number;
  dangerType: number;
  name: string;
  description: string;
  size: string;
  color: string;
  lightLevel: number;
  date: Date;
}
export interface StoryCategory { id: string; title: string; lang: string; }
export interface Story {
  id: string | null;
  title: string;
  text: string;
  category: StoryCategory;
  date: Date;
  readingTime: number;
  lang: string;
  order: number;
}
export interface StringMap { [key: string]: string; }
export interface PostCategory { id: string; title: string; lang: string; cat_code: number; }
export interface Post {
  id: string;
  title: string;
  text: string;
  postDate: Date;
  tags: string[];
  pinned: boolean;
}
export interface Album {
  id: string;
  title: string;
  description: string;
  description_ru: string;
  coverLink: string;
}
export interface Track {
  id: string;
  description: string;
  description_ru: string;
  link: string;
  order: number;
  album_id: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = environment.supabaseUrl + '/rest/v1';
  private readonly headers = new HttpHeaders({
    apikey: environment.supabasePublishableKey,
  });

  constructor(private http: HttpClient) {}

  getData<T>(endpoint: string): Observable<HttpResponse<T>> {
    const [path, queryString = ''] = endpoint.split('?', 2);
    const query = new URLSearchParams(queryString);
    const lang = query.get('lang') ?? '';

    if (path.startsWith('rooms/page/')) {
      const page = Math.max(1, Number(path.split('/')[2]) || 1);
      return this.read<any[]>('rooms', {
        select: 'code,floor,danger_type,size,color,light_level,date,room_translations!inner(name,description,lang)',
        'room_translations.lang': 'eq.' + lang,
        order: 'date.desc,id.desc',
        limit: '10',
        offset: String((page - 1) * 10)
      }, rows => this.mapRooms(rows)) as Observable<HttpResponse<T>>;
    }
    if (path.startsWith('rooms/code/uuid/')) {
      const code = decodeURIComponent(path.slice('rooms/code/uuid/'.length));
      return this.read<any>('rooms', { select: 'id', code: 'eq.' + code, limit: '1' },
        rows => (rows[0]?.id ?? null) as T);
    }
    if (path.startsWith('rooms/name/')) {
      const name = decodeURIComponent(path.slice('rooms/name/'.length));
      return this.roomSearch({ 'room_translations.name': 'ilike.*' + name + '*', 'room_translations.lang': 'eq.' + lang });
    }
    if (path.startsWith('rooms/code/')) {
      const code = decodeURIComponent(path.slice('rooms/code/'.length));
      return this.roomSearch({ code: 'ilike.*' + code + '*', 'room_translations.lang': 'eq.' + lang });
    }
    if (path.startsWith('rooms/danger/')) {
      return this.roomSearch({ danger_type: 'eq.' + decodeURIComponent(path.slice('rooms/danger/'.length)), 'room_translations.lang': 'eq.' + lang });
    }
    if (path.startsWith('rooms/size/')) {
      return this.roomSearch({ size: 'eq.' + decodeURIComponent(path.slice('rooms/size/'.length)), 'room_translations.lang': 'eq.' + lang });
    }
    if (path === 'rooms') return this.roomSearch({ 'room_translations.lang': 'eq.' + lang });

    if (path === 'post') {
      const tags = query.getAll('tags');
      const params: Record<string, string> = {
        select: 'id,title,text,post_date,tags,pinned',
        order: 'pinned.desc,post_date.desc'
      };
      if (tags.length) params['tags'] = 'ov.{' + tags.join(',') + '}';
      return this.read<any[]>('posts', params, rows => rows.map((row: any) => ({
        id: row.id, title: row.title, text: row.text, postDate: row.post_date,
        tags: row.tags ?? [], pinned: row.pinned ?? false
      }))) as Observable<HttpResponse<T>>;
    }
    if (path === 'stories/categories') {
      return this.read<StoryCategory[]>('story_category', {
        select: 'id,title,lang', lang: 'eq.' + lang, order: 'id.asc'
      }) as Observable<HttpResponse<T>>;
    }
    if (path.startsWith('stories/story/')) {
      const id = path.slice('stories/story/'.length);
      return this.read<any>('stories', {
        select: 'id,title,text,date,reading_time,category,lang,order,story_category(id,title,lang)',
        id: 'eq.' + id, limit: '1'
      }, rows => this.mapStories(rows)[0] ?? null) as Observable<HttpResponse<T>>;
    }
    if (path.startsWith('stories/')) {
      const category = path.slice('stories/'.length);
      return this.read<any[]>('stories', {
        select: 'id,title,text,date,reading_time,category,lang,order,story_category(id,title,lang)',
        category: 'eq.' + category, lang: 'eq.' + lang, order: 'order.asc'
      }, rows => this.mapStories(rows)) as Observable<HttpResponse<T>>;
    }
    if (path === 'music/albums') {
      return this.read<any>('album', { select: 'id,title,description,description_ru,cover_link' },
        rows => rows.map((row: any) => this.mapAlbum(row))) as Observable<HttpResponse<T>>;
    }
    if (path.startsWith('music/album/')) {
      const id = path.slice('music/album/'.length);
      return this.read<any>('album', {
        select: 'id,title,description,description_ru,cover_link', id: 'eq.' + id, limit: '1'
      }, rows => rows[0] ? this.mapAlbum(rows[0]) : null) as Observable<HttpResponse<T>>;
    }
    if (path.startsWith('music/tracks/')) {
      const albumId = path.slice('music/tracks/'.length);
      return this.read<any[]>('track', {
        select: 'id,description,description_ru,link,order,album_id',
        album_id: 'eq.' + albumId, order: 'order.asc'
      }, rows => rows.map((row: any) => ({
        id: row.id, description: row.description, description_ru: row.description_ru,
        link: row.link, order: row.order, album_id: row.album_id
      }))) as Observable<HttpResponse<T>>;
    }
    if (path === 'donate') {
      return this.read<any>('donation_goals', {
        select: 'title,title_ru,current_amount,target_amount',
        active: 'eq.true', limit: '1'
      }, rows => {
        const goal = rows[0];
        return goal ? [
          lang === 'ru_RU' ? goal.title_ru : goal.title,
          String(goal.current_amount),
          String(goal.target_amount)
        ] as T : null;
      }) as Observable<HttpResponse<T>>;
    }
    return throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Unknown data endpoint: ' + path }));
  }

  getNumOfRooms(lang: string): Observable<number> {
    return this.http.get<any[]>(this.baseUrl + '/rooms', {
      params: this.toParams({
        select: 'id,room_translations!inner(lang)',
        'room_translations.lang': 'eq.' + lang,
        limit: '1'
      }),
      headers: this.headers.set('Prefer', 'count=exact').set('Range', '0-0'),
      observe: 'response'
    }).pipe(map(response => {
      const contentRange = response.headers.get('content-range') ?? '';
      const total = Number(contentRange.split('/')[1]);
      return Number.isFinite(total) ? Math.ceil(total / 10) : 0;
    }));
  }

  checkKey(_key: string): Observable<HttpResponse<void>> { return this.adminDisabled(); }
  checkCookie(): Observable<HttpResponse<void>> { return this.adminDisabled(); }
  loginAdmin(_key: string): Observable<HttpResponse<void>> { return this.adminDisabled(); }
  logout(): Observable<HttpResponse<void>> { return this.adminDisabled(); }

  private roomSearch(filters: Record<string, string>): Observable<HttpResponse<any>> {
    return this.read<any[]>('rooms', {
      select: 'code,floor,danger_type,size,color,light_level,date,room_translations!inner(name,description,lang)',
      order: 'date.desc,id.desc',
      ...filters
    }, rows => this.mapRooms(rows));
  }

  private read<T>(table: string, values: Record<string, string>, transform?: (body: any) => T): Observable<HttpResponse<T>> {
    return this.http.get<any>(this.baseUrl + '/' + table, {
      params: this.toParams(values), headers: this.headers, observe: 'response'
    }).pipe(map(response => new HttpResponse<T>({
      body: transform ? transform(response.body) : response.body as T,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
      url: response.url ?? undefined
    })));
  }

  private toParams(values: Record<string, string>): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(values)) params = params.set(key, value);
    return params;
  }

  private mapRooms(rows: any[]): ApiResponse[] {
    return rows.flatMap(row => {
      const translation = Array.isArray(row.room_translations) ? row.room_translations[0] : null;
      if (!translation) return [];
      return [{
        code: row.code, floor: row.floor, dangerType: row.danger_type,
        name: translation.name, description: translation.description,
        size: row.size, color: row.color, lightLevel: row.light_level, date: row.date
      }];
    });
  }

  private mapStories(rows: any[]): Story[] {
    return rows.map(row => ({
      id: row.id, title: row.title, text: row.text, category: row.story_category,
      date: row.date, readingTime: row.reading_time, lang: row.lang, order: row.order
    }));
  }

  private mapAlbum(row: any): Album {
    return {
      id: row.id, title: row.title, description: row.description,
      description_ru: row.description_ru, coverLink: row.cover_link
    };
  }

  private adminDisabled(): Observable<HttpResponse<void>> {
    return throwError(() => new HttpErrorResponse({
      status: 503, statusText: 'Admin features are disabled until the Supabase admin panel is rebuilt.'
    }));
  }
}
