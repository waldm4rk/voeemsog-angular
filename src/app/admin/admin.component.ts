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
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AdminComponent implements OnInit {
  constructor(private dataService: ApiService, private router: Router) {}
  loading: boolean = false;
  room: roomInfo = {
    code: '',
    floor: 1.1,
    dangerType: 1,
    name: '1',
    description: '1',
    size: '1',
    color: '1',
    lightLevel: 5,
    date: new Date(),
  };
  unformatted: string = '';
  paragraphs: paragraph[] = [];
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    this.checkApiKey();
  }

  checkApiKey(): void {
    this.loading = true;
    const urlParams = new URLSearchParams(window.location.search);
    const tsValue = urlParams.get('apiKey') || '';
    this.dataService.loginToAdmin(tsValue).subscribe({
      next: (response: HttpResponse<void>) => {
        if (response.status == 401) {
          this.router.navigate(['/']);
          console.log('a');
        }
        return 'aaa';
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;

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

  formatText(): void {
    let formatted = this.unformatted;
    // жирный: *текст*
    formatted = formatted.replace(
      /(?<!\*)\*([^*]+)\*(?!\*)/g,
      '<strong>$1</strong>'
    );

    // курсив: **текст**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<em>$1</em>');

    // перечеркнутый: --текст--
    formatted = formatted.replace(/--([^-\n]+)--/g, '<s>$1</s>');

    // подчеркнутый: _текст_
    formatted = formatted.replace(/_([^_\n]+)_/g, '<u>$1</u>');

    this.paragraphs = [];

    let paragraphs = formatted.split('$NEW');
    paragraphs.forEach((element) => {
      let imagesBool = false;
      let params: string[] = [];
      let reverse = false;
      if (element.includes('$IMG')) {
        const regex = /\$IMG\(([^)]+)\)/;
        const match = element.match(regex);

        if (match && match[1]) {
          params = match[1].split(',').map((p) => p.trim());
        }

        element = element.replace(
          regex,
          ``
        );
        if(element.includes("$REVERSE")){
          reverse = true;
          element = element.replaceAll("$REVERSE", "");
        }
        imagesBool = true;
      }
      while(element.indexOf("$IMG") != -1){
        const regex = /\$IMG\(([^)]+)\)/;
        const match = element.match(regex);

        if (match && match[1]) {
          params = match[1].split(',').map((p) => p.trim());
        }

        element = element.replace(
          regex,
          `<img src="${params.at(0)}" style="max-width:${params.at(1)}; aspect-ratio:${params.at(2)}"/>`
        );
      }
      this.paragraphs.push({
        text: element,
        images: imagesBool,
        params: params,
        reverse: reverse
      });
    });
    // paragraphs = paragraphs.map((element) => {
    //   if (element.includes('$IMG')) {
    //     const regex = /\$IMG\(([^)]+)\)/;
    //     const match = element.match(regex);

    //     let params: string[] = [];
    //     if (match && match[1]) {
    //       params = match[1].split(',').map((p) => p.trim());
    //     }

    //     element = element.replace(
    //       regex,
    //       `</div><img src="${params.at(0)}"><div>`
    //     );
    //     // console.log(element);
    //   }

    //   return element; // обязательно вернуть
    // });
  }
}

export interface roomInfo {
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
export interface paragraph {
  text: string;
  images: boolean;
  params: string[];
  reverse: boolean;
}
