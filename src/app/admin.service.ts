import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/admin'; // твой API

  constructor(private http: HttpClient) {}

  sendRoom(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/room`, data, { withCredentials: true });
  }
  sendTranslation(data: any, roomId: string): Observable<any> {
    const params = new HttpParams().set('roomId', roomId);
    return this.http.post(`${this.baseUrl}/room/translation`, data, { params, withCredentials: true });
  }
}