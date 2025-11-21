import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-room',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
})
export class RoomsComponent implements OnInit {
  data: ApiResponse[] = [];
  loading: boolean = false;
  userInput: string | null = '';
  langCode: string = 'ru_RU';
  page: number = 1;
  lastPage: number = 999999;
  cashedLastPage: number = -1;
  constructor(
    private dataService: ApiService,
    private router: Router,
    private translate: TranslateModule,
    private cookies: CookiesService,
    private title: Title,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }
    this.fetchRoomData();
    this.getNumberOfPages();
    this.translateService.use(this.cookies.returnLang()).subscribe((translations: any) => {
      this.title.setTitle("Voeemsog | " + (translations?.['MAIN']?.['ROOMS'] ?? "Rooms"));
    });
    }

  updateButtonStates(click: boolean): void {
    console.log(this.page + ' / ' + this.lastPage);
    if (this.page == 1) {
      (
        document.getElementsByClassName('prev')[0] as HTMLButtonElement
      ).disabled = true;
    } else {
      (
        document.getElementsByClassName('prev')[0] as HTMLButtonElement
      ).disabled = false;
    }
    if (this.page >= this.lastPage) {
      (
        document.getElementsByClassName('next')[0] as HTMLButtonElement
      ).disabled = true;
    } else {
      (
        document.getElementsByClassName('next')[0] as HTMLButtonElement
      ).disabled = false;
    }
    if (click) {
      this.fetchRoomData();
    }
  }

  fetchRoomData(): void {
    this.loading = true;

    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService
      .getData<ApiResponse[]>(`rooms/page/${this.page}?lang=${this.langCode}`)
      .subscribe({
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
    if (this.cashedLastPage != -1) {
      this.lastPage = this.cashedLastPage;
      this.updateButtonStates(false);
      return;
    }
    this.dataService.getNumOfRooms(this.langCode).subscribe({
      next: (count: number) => {
        this.lastPage = count || 0;
        this.cashedLastPage = this.lastPage;
        console.log(count, this.lastPage);
        this.loading = false;
        this.updateButtonStates(false);
      },
      error: (err) => {
        console.error(err.status);
        this.loading = false;
      },
    });
  }
  prevPage(): void {
    this.page--;
    this.updateButtonStates(true);
  }

  goToPage(): void {
    const inputElement = document.getElementsByClassName(
      'pageNumber'
    )[0] as HTMLInputElement;
    const pageNumber = parseInt(inputElement.value, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= this.lastPage) {
      this.page = pageNumber;
      this.updateButtonStates(true);
    } else if (pageNumber > this.lastPage) {
      this.page = this.lastPage;
      inputElement.value = this.lastPage.toString();
      this.updateButtonStates(true);
    } else if (pageNumber < 1) {
      this.page = 1;
      inputElement.value = '1';
      this.updateButtonStates(true);
    }
  }

  nextPage(): void {
    this.page++;
    this.updateButtonStates(true);
  }

  redirectToPage(code: string): void {
    this.router.navigateByUrl('/room?code=' + code);
  }

  filterByName(): void {
    if (this.userInput?.length == 0) {
      this.fetchRoomData();
      this.getNumberOfPages();
      return;
    }
    this.dataService
      .getData<ApiResponse[]>(
        `rooms/name/${this.userInput}?lang=${this.langCode}`
      )
      .subscribe({
        next: (response: HttpResponse<ApiResponse[]>) => {
          // Access the status code here:
          const statusCode = response.status;

          // Access the body (the data) and default to an empty array if null:
          this.data = response.body ?? [];
          this.lastPage =
            Math.floor(this.data.length / 10) +
            (this.data.length % 10 == 0 ? 0 : 1);
          this.updateButtonStates(false);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        },
      });
    this.dataService
      .getData<ApiResponse[]>(
        `rooms/code/${this.userInput}?lang=${this.langCode}`
      )
      .subscribe({
        next: (response: HttpResponse<ApiResponse[]>) => {
          this.data = this.data.concat(response.body ?? []);
        },
        error: (err) => {
          this.loading = false;
        },
      });
  }
}
