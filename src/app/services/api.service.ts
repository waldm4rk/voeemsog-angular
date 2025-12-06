import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Описываем структуру данных, которые ожидаем получить.
 * Замените на вашу реальную структуру.
 */



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
export interface StoryCategory{
  id: string,
  title: string,
  lang: string
}
export interface Story{
  id: string | null,
  title: string,
  text: string,
  category: StoryCategory,
  date: Date,
  readingTime: number,
  lang: string
}
export interface StringMap {
  [key: string]: string;
}
export interface PostCategory{
  id: string,
  title: string,
  lang: string,
  cat_code: number
}
export interface Post{
  id: string,
  title: string,
  text: string,
  postDate: Date,
  tags: string[],
  pinned: boolean
}
export interface Album{
  id: string,
  title: string,
  description: string,
  description_ru: string,
  coverLink: string
}
export interface Track{
  id: string,
  title: string,
  description: string,
  description_ru: string,
  link: string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // 🔑 Базовый URL для всех API запросов
  private readonly BASE_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  /**
   * Отправляет GET-запрос к указанному эндпоинту.
   *
   * @param endpoint Часть URL после BASE_URL (например, 'users' или 'products/1').
   * @returns Observable с данными в формате JSON.
   */
  getData<T>(endpoint: string): Observable<HttpResponse<T>> {
    const url = `${this.BASE_URL}/${endpoint}`;
    
    // 🚀 Используем метод .get() из HttpClient
    // <T> позволяет типизировать возвращаемые данные
    return this.http.get<T>(url, { observe: 'response'});
  }
  checkKey(key: string): Observable<HttpResponse<void>> {
  const url = `${this.BASE_URL}/admin/api`;
  return this.http.post<void>(url, key, {
    observe: 'response',
    headers: { 'Content-Type': 'text/plain' } // обязательно text/plain
  });
}
  checkCookie(): Observable<HttpResponse<void>> {
    const url = `${this.BASE_URL}/admin/check-cookie`;
    return this.http.get<void>(url, {observe: 'response', withCredentials: true});
  }
getNumOfRooms(lang: string): Observable<number> {
  return this.http.get<number>(`${this.BASE_URL}/rooms/num?lang=${lang}`);
}
  loginAdmin(key: string): Observable<HttpResponse<void>>{
    const url = `${this.BASE_URL}/admin/login`;
    const body: StringMap = {
      'apiKey': key
    };
    return this.http.post<void>(url, body, {observe: 'response', withCredentials: true});
  }
  logout(): Observable<HttpResponse<void>> {
    const url = `${this.BASE_URL}/admin/logout`;
    return this.http.post<void>(url, {}, {observe: 'response', withCredentials: true});
  }
}
