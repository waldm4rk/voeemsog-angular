import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
  page: number = 1;
  lastPage: number = 999999;
  constructor(private dataService: ApiService, private router: Router) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.fetchRoomData();
    this.getNumberOfPages();
  }

  updateButtonStates(click: boolean): void{
    console.log(this.page + " / " + this.lastPage);
    if(this.page == 1){
      (document.getElementsByClassName("prev")[0] as HTMLButtonElement).disabled = true;
    }else{
      (document.getElementsByClassName("prev")[0] as HTMLButtonElement).disabled = false;
    }
    if(this.page >= this.lastPage){
      (document.getElementsByClassName("next")[0] as HTMLButtonElement).disabled = true;
    }
    else{
      (document.getElementsByClassName("next")[0] as HTMLButtonElement).disabled = false;
    }
    if(click){
      this.fetchRoomData();
    }
  }

  fetchRoomData(): void {
    this.loading = true;

    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService.getData<ApiResponse[]>(`rooms/page/${this.page}?lang=${this.langCode}`).subscribe({
      next: (response: HttpResponse<ApiResponse[]>) => {
        // Access the status code here:
        const statusCode = response.status;
        // if(statusCode != 200){
        //   this.lastPage = this.page;
        //   this.updateButtonStates(false);
        //   return;
        // }

        // Access the body (the data) and default to an empty array if null:
        this.data = response.body ?? [];

        this.loading = false;
      },
      error: (err) => {
        // Error handler often contains the status code for non-2xx responses
        const errorStatusCode = err.status; // This works for errors like 4xx and 5xx
        console.error(`HTTP Error Status Code: ${errorStatusCode}`);
        this.loading = false;
      },
    });
  }

  getNumberOfPages(): void {
    this.loading = true;

    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService.getData<number>(`rooms/num`).subscribe({
      next: (response: HttpResponse<number>) => {
        // Access the status code here:
        const statusCode = response.status;
        // if(statusCode != 200){
        //   this.lastPage = this.page;
        //   this.updateButtonStates(false);
        //   return;
        // }

        // Access the body (the data) and default to an empty array if null:
        this.lastPage = response.body || 0;
        console.log(response.body);
        console.log(this.lastPage);
        this.loading = false;
        
      this.updateButtonStates(false);
      },
      error: (err) => {
        // Error handler often contains the status code for non-2xx responses
        const errorStatusCode = err.status; // This works for errors like 4xx and 5xx
        console.error(`HTTP Error Status Code: ${errorStatusCode}`);
        this.loading = false;
      },
    });
  }

  prevPage(): void{
    this.page--;
    this.updateButtonStates(true);
  }

  nextPage(): void{
    this.page++;
    this.updateButtonStates(true);
  }

  redirectToPage(code: string): void{
    this.router.navigateByUrl('/room?code=' + code);
  }

  filterByName(): void{
    if(this.userInput?.length == 0){
      this.fetchRoomData();
      return;
    }
    this.dataService.getData<ApiResponse[]>(`rooms/name/${this.userInput}?lang=${this.langCode}`).subscribe({
        next: (response: HttpResponse<ApiResponse[]>) => {
          // Access the status code here:
          const statusCode = response.status;

          // Access the body (the data) and default to an empty array if null:
          this.data = response.body ?? [];

          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        },
      });
    this.dataService.getData<ApiResponse[]>(`rooms/code/${this.userInput}?lang=${this.langCode}`).subscribe({
      next: (response: HttpResponse<ApiResponse[]>) => {
        this.data = this.data.concat(response.body ?? []);
      },
      error: (err) => {
          this.loading = false;
      },
    });
  }
}
