import { Component, OnInit } from '@angular/core';
import { ApiService, ApiResponse } from '../services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule, getLocaleDateFormat } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookiesService } from 'app/cookies.service';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { AdminService } from 'app/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: true, // обязательно для Standalone Component
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AdminComponent implements OnInit {
  lang: any;
  uuid: any;
  isAuthorized: boolean = false;
  constructor(
    private dataService: ApiService,
    private router: Router,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private cookies: CookiesService
  ) {}
  loading: boolean = false;
  room: room = {
    code: '',
    floor: 1,
    dangerType: 1,
    size: '',
    color: '',
    lightLevel: 0,
    date: new Date(),
  };
  roomTranslation: roomTranslation = {
    lang: 'en_US',
    name: '',
    description: '',
  };
  unformatted: string = '';
  paragraphs: paragraph[] = [];
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
  this.room.code = this.route.snapshot.queryParamMap.get('code') || '';
  this.room.floor = 1;
  this.room.dangerType = Number(this.route.snapshot.queryParamMap.get('danger') || 0);
  this.room.size = this.route.snapshot.queryParamMap.get('size') || '';
  this.room.color = this.route.snapshot.queryParamMap.get('color') || '';
  this.room.lightLevel = Number(this.route.snapshot.queryParamMap.get('light') || 0);
  this.roomTranslation.lang = this.route.snapshot.queryParamMap.get('lang') || 'en_US';
  this.roomTranslation.name = this.route.snapshot.queryParamMap.get('name') || '';
  this.roomTranslation.description = this.route.snapshot.queryParamMap.get('description') || '';
}


  formatText(): void {
    let formatted = this.roomTranslation.description;
    if(this.roomTranslation.description.length == 0){
      this.adminService.getRoomByCode(this.roomTranslation.lang, this.room.code).subscribe({
        next: (response: ApiResponse[]) => {
          
          console.log("BODY =", response);
          // Cast response.body to any (or the correct type) before accessing .description to avoid the compile error
          this.roomTranslation.description = response[0].description || '';
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
    }
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
      this.paragraphs.push({
        text: element,
        images: imagesBool,
        params: params,
        reverse: reverse,
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
  submitRoom(): void {
    if(!confirm("Опубликовать комнату?")) return;
    this.adminService.sendRoom(this.room).subscribe({
      next: (res) => console.log('OK', res),
      error: (err) => console.error('Error', err),
    });
  }
  submitTranslation(): void {
    if(!confirm("Опубликовать перевод?")) return;
    this.dataService
      .getData<string>('rooms/code/uuid/' + this.room.code)
      .subscribe({
        next: (res) => {
          this.uuid = res.body;
          this.adminService
            .sendTranslation(this.roomTranslation, this.uuid)
            .subscribe({
              next: (res2) => console.log('OK', res2),
              error: (err2) => console.error('Error', err2),
            });
        },
        error: (err) => console.error('Error', err),
      });
  }
  logout(): void {
    this.dataService
      .logout()
      .subscribe({
        next: (res) => {
          console.log('OK', res);
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error', err),
      });
  }
}

export interface room {
  code: string;
  floor: number;
  dangerType: number;
  size: string;
  color: string;
  lightLevel: number;
  date: Date;
}

export interface roomTranslation {
  lang: string;
  name: string;
  description: string;
}
export interface paragraph {
  text: string;
  images: boolean;
  params: string[];
  reverse: boolean;
}