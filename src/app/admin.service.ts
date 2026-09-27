import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Album, ApiResponse, Track } from './services/api.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  sendRoom(_data: any): Observable<any> { return this.disabled(); }
  sendTranslation(_data: any, _roomId: string): Observable<any> { return this.disabled(); }
  getRoomByCode(_lang: string, _roomCode: string): Observable<ApiResponse[]> { return this.disabled(); }
  sendNews(_data: any): Observable<any> { return this.disabled(); }
  deletePost(_postId: string): Observable<any> { return this.disabled(); }
  deleteRoom(_code: string): Observable<any> { return this.disabled(); }
  postReq(_url: string, _data: any): Observable<any> { return this.disabled(); }
  deleteStory(_storyId: string): Observable<any> { return this.disabled(); }
  putAlbum(_data: Album): Observable<Album> { return this.disabled(); }
  putTracks(_data: Track[]): Observable<any[]> { return this.disabled(); }

  private disabled<T>(): Observable<T> {
    return throwError(() => new Error('Admin operations are disabled until the Supabase admin panel is rebuilt.'));
  }
}

export interface PostDTO {
  title: string;
  text: string;
  tags: string[];
  postDate: Date;
  pinned: boolean;
}

export interface StoryDTO {
  id: string;
  title: string;
  text: string;
  category: { id: number };
  readingTime: number;
  lang: string;
  order: number;
}
