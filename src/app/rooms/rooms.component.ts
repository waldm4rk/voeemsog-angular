import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-room',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule]
})
export class RoomsComponent implements OnInit {
  data: ApiResponse[] = []; 
  loading: boolean = false;
  userInput: string | null = "";
  langCode: string = "ru_RU";
  constructor(private dataService: ApiService) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.fetchRoomData();
  }

  fetchRoomData(): void {
    this.loading = true;

    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService.getData<ApiResponse[]>(`rooms?lang=${this.langCode}`).subscribe({
      next: (data: ApiResponse[]) => {
        this.data = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }

  filterByName(): void{
    this.loading = true;
    this.dataService.getData<ApiResponse[]>(`rooms/name/${this.userInput}?lang=${this.langCode}`).subscribe({
      next: (data: ApiResponse[]) => {
        this.data = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }


  formatLight(level: number): string {
    const max = 5; // если у тебя шкала 1-5
    return `${level}/${max}`;
  }

  // Пример для даты публикации, можно использовать реальную дату
  getPublicationDate(): string {
    return new Date().toLocaleDateString('ru-RU');
  }
  // ngOnInit(): void {
  //   console.log("aa");
  //   this.api
  //     .getData('rooms') // 👈 обращается к baseUrl + "/items"
  //     .subscribe({
  //       next: (response) => (this.data = response),
  //       error: (err) => console.error(err),
  //     });
  //   console.log(this.data);
  // }
}
