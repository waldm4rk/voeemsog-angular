import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule]
})
export class AdminComponent {
  constructor(private dataService: ApiService, private router: Router) {}
  loading: boolean = false;
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.checkApiKey();
  }

  checkApiKey(): void{
    this.loading = true;
    const urlParams = new URLSearchParams(window.location.search);
    const tsValue = urlParams.get('apiKey') || "";
    this.dataService.loginToAdmin(tsValue).subscribe({
      next: (response: HttpResponse<void>) => {
        if(response.status == 401){
          this.router.navigate(['/']);
          console.log("a");
        }
        return "aaa";
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        
        // 🚨 Этот блок сработает для всех ошибок (4xx, 5xx).
        
        // Проверяем статус 401 Unauthorized
        if (err.status === 401) {
          console.log(`Authorization failed. Redirecting to home. Status: ${err.status}`);
          
          // Выполняем перенаправление на главную страницу
          this.router.navigate(['/']);
        } else {
          // Обработка других ошибок (404, 500 и т.д.)
          console.error(`An unexpected error occurred. Status: ${err.status}`, err);
          
          // Опционально: перенаправление или показ сообщения об ошибке
          // this.router.navigate(['/error-page']);
        }
      },
    });
  }
}
