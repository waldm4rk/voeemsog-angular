import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getData<T>(endpoint: string): Observable<T> {
    const url = `${this.BASE_URL}/${endpoint}`;
    console.log(`Отправка GET-запроса на: ${url}`);
    
    // 🚀 Используем метод .get() из HttpClient
    // <T> позволяет типизировать возвращаемые данные
    return this.http.get<T>(url);
  }
}
