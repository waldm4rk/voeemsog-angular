import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule],
})
export class RoomComponent implements OnInit {
  data: ApiResponse[] = [];
  loading: boolean = false;
  paragraphs: string[] = [];
  langCode: string = "ru_RU";
  constructor(private dataService: ApiService) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.loading = true;
    const urlParams = new URLSearchParams(window.location.search);
    const tsValue = urlParams.get('code');
    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService.getData<ApiResponse[]>(`rooms/code/${tsValue}?lang=${this.langCode}`).subscribe({
      next: (response: HttpResponse<ApiResponse[]>) => {
          this.data = response.body || [];
          this.loading = false;
          console.log('Данные получены в компоненте:', this.data);

          this.paragraphs = this.sliceStringBySentences(
            this.data.at(0)?.description
          );

          console.log(this.paragraphs);
        },
        error: (err) => {
          console.error('Ошибка запроса:', err);
          this.loading = false;
        },
      });
  }
  sliceStringBySentences(text: string | undefined): string[] {
    if (!text) return [''];
    const sentences = text.split('NEW');
    return sentences;
  }
}
