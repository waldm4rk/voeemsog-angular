import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { ApiService, Post, PostCategory } from 'app/services/api.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-news',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  langCode: string = 'en_US';
  categories: PostCategory[] = [];
  posts: Post[] = [];
  constructor(private cookies: CookiesService, private api: ApiService) {}
  ngOnInit() {
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }
    console.log(this.langCode);
    
    this.fetchCategories();
  }

  fetchPosts(): void {
    for (let category of this.categories) {
      this.api
    .getData<Post[]>(`posts/posts/category?categoryId=${category.id}`)
    .subscribe({
      next: (response: HttpResponse<Post[]>) => {
       this.posts = response.body ?? [];
       console.log(this.posts);
       console.log('HTTP Status:', response.status);
       this.fetchPosts();
      },
      error: (err) => {
        console.error(`HTTP Error Status Code: ${err.status}`);
      },
  });
    }

  }

  fetchCategories(): void {

    // 📞 Вызываем функцию сервиса, передавая нужный эндпоинт
    this.api
    .getData<PostCategory[]>(`posts/categories?lang=${this.langCode}`)
    .subscribe({
      next: (response: HttpResponse<PostCategory[]>) => {
        // теперь response имеет тип HttpResponse<PostCategory[]>
       this.categories = response.body ?? [];
       console.log('HTTP Status:', response.status);
       this.fetchPosts();
      },
      error: (err) => {
        console.error(`HTTP Error Status Code: ${err.status}`);
      },
  });
  }
}
