import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { ApiService, Post, PostCategory } from 'app/services/api.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from 'app/admin.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-news',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  langCode: string = 'en_US';
  isAuthorized: boolean = false;
  categories: string[] = [];
  posts: Post[] = [];
  filterCat: string[] = [];

  sortedPosts: Post[] = [];
  regularPosts: Post[] = [];
  pinnedPosts: Post[] = [];

  loading: boolean = false;
  constructor(
    private cookies: CookiesService,
    private dataService: ApiService,
    private adminService: AdminService,
    private title: Title,
  ) {}
  ngOnInit() {
    let title = "Voeemsog | ";
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
      title += "News";
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
      title += "Новости";
    }
    this.title.setTitle(title);
    console.log(this.langCode);
    this.dataService.checkCookie().subscribe({
      next: (response: HttpResponse<void>) => {
        // Любой успешный ответ → авторизован
        this.isAuthorized = true;
      },
      error: (err: HttpErrorResponse) => {
        // Любая ошибка (401, 403, 404) → редирект
        console.error('Unauthorized or error', err);
      },
    });
    this.fetchCategories();
  }

  fetchPosts(): void {
    this.loading = true;
    let requestParams = '';
    for (let category of this.categories) {
      requestParams += `tags=${category}&`;
    }
    requestParams = requestParams.slice(0, -1); // Remove the trailing '&'
    this.dataService.getData<Post[]>(`post?${requestParams}`).subscribe({
      next: (response: HttpResponse<Post[]>) => {

        this.loading = false;
        if(response.body == null) return;
        this.posts = response.body?.sort((a, b) => {
        // pinned сначала
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;

        // дальше — обычная сортировка по дате, если нужно
        return new Date(b.postDate).getTime() - new Date(a.postDate).getTime();
      });
      },
      error: (err) => {
        console.error(`HTTP Error Status Code: ${err.status}`);
      },
    });
  }
  getPinned() {
    const pinnedPosts = this.posts
      .filter((post) => post.pinned) // только закрепленные
      .sort(
        (a, b) =>
          new Date(b.postDate).getTime() -
          new Date(a.postDate).getTime()
      ); // новые первыми

    const regularPosts = this.posts
      .filter((post) => !post.pinned) // остальные
      .sort(
        (a, b) =>
          new Date(b.postDate).getTime() -
          new Date(a.postDate).getTime()
      );
    this.sortedPosts = [...pinnedPosts, ...regularPosts];
    this.regularPosts = regularPosts;
    this.pinnedPosts = pinnedPosts;
  }

  fetchCategories() {
    if (this.langCode == 'ru_RU') {
      this.categories = [
        'Публикация',
        'Литература',
        'Комнаты',
        'Сообщество',
        'Музыка',
      ];
    } else if (this.langCode == 'en_US') {
      this.categories = [
        'Publication',
        'Literature',
        'Rooms',
        'Community',
        'Music',
      ];
    }
    this.fetchPosts();
  }
  filter() {
    const posts = Array.from(
      document.getElementsByClassName('post')
    ) as HTMLElement[];
    if (this.filterCat.length === 0) {
      // Если ни одной категории не выбрано — показываем все посты
      posts.forEach((el) => (el.style.display = ''));
      return;
    }

    for (let el of posts) {
      // Проверяем, есть ли у элемента хотя бы один класс из filterCat
      const matches = this.filterCat.some((cat) => el.classList.contains(cat));

      if (matches) {
        el.style.display = ''; // Показываем
      } else {
          el.style.display = 'none'; // Скрываем
      }
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
    this.filter(); // Применяем фильтр
  }
  deletePost(postId: string) {
    this.adminService.deletePost(postId).subscribe({
      next: (response: any) => {
        console.log('Post deleted successfully', response);
        // Обновляем список постов после удаления
        this.fetchPosts();
      },
      error: (err: any) => {
        console.error('Error deleting post', err);
      },
    });
  }
}
