import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule, getLocaleDateFormat } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { AdminService } from 'app/admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AdminLoginComponent implements OnInit {
  adminPass: string = '';
  constructor(
    private dataService: ApiService,
    private router: Router,
    private adminService: AdminService
  ) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.checkApiKey();
  }

  checkApiKey(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const tsValue = urlParams.get('apiKey') || '';
    this.dataService.checkKey(tsValue).subscribe({
      next: (response: HttpResponse<void>) => {
        if (response.status == 401) {
          this.router.navigate(['/']);
        }
        return 'aaa';
      },
      error: (err: HttpErrorResponse) => {

        // 🚨 Этот блок сработает для всех ошибок (4xx, 5xx).

        // Проверяем статус 401 Unauthorized
        if (err.status === 401) {
          console.log(
            `Authorization failed. Redirecting to home. Status: ${err.status}`
          );

          // Выполняем перенаправление на главную страницу
          this.router.navigate(['/']);
        } else {
          // Обработка других ошибок (404, 500 и т.д.)
          console.error(
            `An unexpected error occurred. Status: ${err.status}`,
            err
          );

          // Опционально: перенаправление или показ сообщения об ошибке
          // this.router.navigate(['/error-page']);
        }
      },
    });
  }
  checkPass(): void {
    this.dataService.loginAdmin(this.adminPass).subscribe({
      next: (response: HttpResponse<void>) => {
        if (response.status == 401) {
          this.router.navigate(['/']);
        }else if(response.status == 200){
          this.router.navigate(['/admin-choose']);
        }
      },
      error: (err: HttpErrorResponse) => {

        // 🚨 Этот блок сработает для всех ошибок (4xx, 5xx).

        // Проверяем статус 401 Unauthorized
        if (err.status === 401) {
          console.log(
            `Authorization failed. Redirecting to home. Status: ${err.status}`
          );

          // Выполняем перенаправление на главную страницу
          this.router.navigate(['/']);
        } else {
          // Обработка других ошибок (404, 500 и т.д.)
          console.error(
            `An unexpected error occurred. Status: ${err.status}`,
            err
          );

          // Опционально: перенаправление или показ сообщения об ошибке
          // this.router.navigate(['/error-page']);
        }
      },
    });
  }

}
