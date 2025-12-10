import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Album, ApiResponse, StoryCategory, Track } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'https://api.voeemsog.com'; // твой API
  constructor(private http: HttpClient) {}

  sendRoom(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/room`, data, { withCredentials: true });
  }
  sendTranslation(data: any, roomId: string): Observable<any> {
    const params = new HttpParams().set('roomId', roomId);
    return this.http.put(`${this.baseUrl}/admin/room/translation`, data, { params, withCredentials: true });
  }
  getRoomByCode(lang: string, roomCode: string){
    const params = new HttpParams()
      .set('lang', lang);
    return this.http.get<ApiResponse[]>(`${this.baseUrl}/rooms/code/${roomCode}`, { params, withCredentials: true });
  }
  sendNews(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/post`, data, { withCredentials: true });
  }
  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/post/${postId}`, { withCredentials: true });
  }
  deleteRoom(code: string): Observable<any>{
    console.log("deleted");
    return this.http.delete(`${this.baseUrl}/admin/room/code/${code}`, {withCredentials: true});
  }
  postReq(url: string, data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${url}`, data, {withCredentials: true});
  }
  deleteStory(storyId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/story/${storyId}`, { withCredentials: true });
  }
  putAlbum(data: Album): void{
    this.http.post(`${this.baseUrl}/admin/music/album`, data, {withCredentials: true})
    .subscribe({
      next: (response) => console.log(`Альбом ${data.title} успешно сохранен. `, response),
      error: (error) => console.error("Произошла ошибка при сохранении альбома", error)
    });
  }
  putTracks(data: Track[]): void {
  for (const track of data) {
    this.http.post(`${this.baseUrl}/admin/music/track`, track, { withCredentials: true })
      .subscribe({
        next: (response) => console.log(`Трек ${track.id} успешно обновлен/сохранен.`, response),
        error: (error) => console.error(`Ошибка при сохранении трека ${track.id}:`, error)
      });
    }
  }
}
export interface PostDTO{
  title: string;
  text: string;
  tags: string[];
  postDate: Date;
  pinned: boolean;
}
export interface StoryDTO{
  title: string,
  text: string;
  category: {id: number};
  readingTime: number;
  lang: string;
}