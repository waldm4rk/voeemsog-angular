import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
export interface StringMap {
  [key: string]: string;
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
    console.log(`Отправка GET-запроса на: ${url}`);
    
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
