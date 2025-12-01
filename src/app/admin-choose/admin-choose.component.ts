import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin.service';
import { ApiService } from 'app/services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-choose',
  imports: [NgIf],
  templateUrl: './admin-choose.component.html',
  styleUrl: './admin-choose.component.scss'
})
export class AdminChooseComponent {
  constructor(private dataService: ApiService, private router: Router, private adminService: AdminService) {}

  isAuthorized: boolean = false;

   ngOnInit(): void {
  this.dataService.checkCookie().subscribe({
    next: (response: HttpResponse<void>) => {
      // Любой успешный ответ → авторизован
      this.isAuthorized = true;
    },
    error: (err: HttpErrorResponse) => {
      // Любая ошибка (401, 403, 404) → редирект
      console.error('Unauthorized or error', err);
      this.router.navigate(['/error']);
    },
  });
}

}
