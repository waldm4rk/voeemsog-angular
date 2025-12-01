import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiResponse } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080'; // твой API

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
    return this.http.post(`${this.baseUrl}/post`, data, { withCredentials: true });
  }
  deletePost(postId: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/post/${postId}`, { withCredentials: true });
  }
}
export interface PostDTO{
  title: string;
  text: string;
  tags: string[];
  postDate: Date;
  pinned: boolean;
}