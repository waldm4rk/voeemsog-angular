import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { paragraph } from 'app/admin/admin.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, TranslateModule],
})
export class RoomComponent implements OnInit {
  data: ApiResponse[] = [];
  loading: boolean = false;
  paragraphs: string[] = [];
  langCode: string = 'ru_RU';
  paragraphsObject: paragraph[] = [];
  constructor(
    private dataService: ApiService,
    private cd: ChangeDetectorRef,
    private translate: TranslateModule,
    private cookies: CookiesService,
    private translateService: TranslateService,
    private title: Title
  ) {}
  ngOnInit(): void {
    // Вызов при инициализации (или по событию, как в fetchUserData)
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.loading = true;
    const urlParams = new URLSearchParams(window.location.search);
    const tsValue = urlParams.get('code');
    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.dataService
      .getData<ApiResponse[]>(`rooms/code/${tsValue}?lang=${this.langCode}`)
      .subscribe({
        next: (response: HttpResponse<ApiResponse[]>) => {
          this.data = response.body || [];
          this.loading = false;
          console.log('Данные получены в компоненте:', this.data);

          this.formatText(this.data.at(0)?.description || '');
          this.cd.detectChanges();
          this.title.setTitle(this.data.at(0)?.code + ": " + this.data.at(0)?.name);
        },
        error: (err) => {
          console.error('Ошибка запроса:', err);
          this.loading = false;
        },
      });
  }
  formatText(text: string): string {
    let formatted = text || '';
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

    formatted = formatted.replace(/^>\s*(.+)$/gm, '<li>$1</li>');

    // Объединяем подряд идущие <li> в <ul>
    formatted = formatted.replace(/(<li>[\s\S]*?<\/li>)/g, (match) => {
      // Если это одиночный li — оборачиваем
      if (!match.startsWith('<ul>')) {
        const items = match
          .split('\n')
          .filter((l) => l.trim().startsWith('<li>'))
          .join('');

        return `<ul>${items}</ul>`;
      }
      return match;
    });

    this.paragraphsObject = [];

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

        element = element.replace(regex, ``);
        if (element.includes('$REVERSE')) {
          reverse = true;
          element = element.replaceAll('$REVERSE', '');
        }
        imagesBool = true;
      }
      while (element.indexOf('$IMG') != -1) {
        const regex = /\$IMG\(([^)]+)\)/;
        const match = element.match(regex);

        if (match && match[1]) {
          params = match[1].split(',').map((p) => p.trim());
        }

        element = element.replace(
          regex,
          `<img src="${params.at(0)}" style="max-width:${params.at(
            1
          )}; aspect-ratio:${params.at(2)}; flex: 0 0 ${params.at(
            1
          )} !important;"/>`
        );
      }
      this.paragraphsObject.push({
        text: element,
        images: imagesBool,
        params: params,
        reverse: reverse,
      });
    });
    return formatted;
  }
}
