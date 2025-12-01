import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, PostDTO } from 'app/admin.service';
import { ApiService, Post } from 'app/services/api.service';
import { NgIf, NgForOf } from '@angular/common';
import { CookiesService } from 'app/cookies.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-news',
  imports: [NgIf, NgForOf, FormsModule],
  templateUrl: './admin-news.component.html',
  styleUrl: './admin-news.component.scss'
})
export class AdminNewsComponent {
  constructor(private dataService: ApiService, private router: Router, private adminService: AdminService, private cookies: CookiesService) {}
  langCode: string = 'en_US';
  categories: string[] = [];
  isAuthorized: boolean = false;
  filterCat: string[] = [];
  post: PostDTO = {
    title: '',
    text: '',
    tags: [],
    postDate: new Date(),
    pinned: false
  };
  ngOnInit(): void {
    this.dataService.checkCookie().subscribe({
      next: (response: HttpResponse<void>) => {
        // Любой успешный ответ → авторизован
        this.isAuthorized = true;
        this.postInit();
      },
      error: (err: HttpErrorResponse) => {
        // Любая ошибка (401, 403, 404) → редирект
        console.error('Unauthorized or error', err);
        this.router.navigate(['/error']);
      },
    });
  } 
  postInit(){
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }
  this.fetchCategories();
  }
  fetchCategories(){
    if(this.langCode == 'ru_RU'){
      this.categories = ['Публикация', 'Литература', 'Комнаты', 'Сообщество', 'Музыка'];
    }else if(this.langCode == 'en_US'){
      this.categories = ['Publication', 'Literature', 'Rooms', 'Community', 'Music'];
    }
  }



  addFilter(category: string) {
    const index = this.filterCat.indexOf(category);

    if (index > -1) {
      // Категория уже выбрана — удаляем (toggle)
      this.filterCat.splice(index, 1);
    } else {
      // Категории нет — добавляем
      this.filterCat.push(category);
    }
    document.getElementsByClassName(category)[0].classList.toggle('active');
}
  publishPost(){
    let title = document.getElementsByClassName('newsTitle')[0] as HTMLInputElement;
    let text = document.getElementsByClassName('newsText')[0] as HTMLTextAreaElement;
    let pinPic = document.querySelector('.postTitle img');
    this.post.title = title.value;
    this.post.text = text.value;
    this.post.tags = this.filterCat;
    this.post.postDate = new Date();
    this.post.pinned = pinPic?.classList.contains('active') ?? false;
    this.adminService.sendNews(this.post).subscribe({
      next: (response: any) => {
        console.log('Post published successfully', response);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error publishing post', err);
      },
    });
  }
  togglePin(){
    this.post.pinned = !this.post.pinned;
    document.querySelector('.postTitle img')?.classList.toggle('active');
  }
}
