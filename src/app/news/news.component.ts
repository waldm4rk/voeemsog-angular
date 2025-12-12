import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { ApiService, Post, PostCategory } from 'app/services/api.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from 'app/admin.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-news',
  imports: [NgFor, FormsModule, CommonModule, TranslateModule],
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
    private route: ActivatedRoute,
    private translate: TranslateModule,
    private meta: Meta
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
    this.dataService.checkCookie().subscribe({
      next: (response: HttpResponse<void>) => {
        this.isAuthorized = true;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Unauthorized or error', err);
      },
    });
    this.meta.updateTag({name: 'description', content:"What's new in Voeemsog? Come in and check: dozens of new rooms, new short stories, even new music!"})

    this.fetchCategories();
  }
  ngAfterViewInit() {
  setTimeout(() => {
    const section = Number(this.route.snapshot.queryParamMap.get('tag'));
    if (section && !isNaN(section)) {
      this.addFilter(this.categories[section]);
    }
  });
  }

  fetchPosts(): void {
    this.loading = true;
    let requestParams = '';
    for (let category of this.categories) {
      requestParams += `tags=${category}&`;
    }
    requestParams = requestParams.slice(0, -1);
    this.dataService.getData<Post[]>(`post?${requestParams}`).subscribe({
      next: (response: HttpResponse<Post[]>) => {

        this.loading = false;
        if(response.body == null) return;
        this.posts = response.body?.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;

        return new Date(b.postDate).getTime() - new Date(a.postDate).getTime();
      });
       console.log(this.posts);
      },
      error: (err) => {
        console.error(`HTTP Error Status Code: ${err.status}`);
      },
    });
  }
  getPinned() {
    const pinnedPosts = this.posts
      .filter((post) => post.pinned)
      .sort(
        (a, b) =>
          new Date(b.postDate).getTime() -
          new Date(a.postDate).getTime()
      ); 

    const regularPosts = this.posts
      .filter((post) => !post.pinned)
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
  get filter(): Post[] {
    if (this.filterCat.length === 0) {
      return this.posts;
    }

    return this.posts.filter(post =>
      this.filterCat.some(cat =>
        post.tags?.includes(cat)
      )
    );
  }
  addFilter(category: string) {
    const index = this.filterCat.indexOf(category);

    if (index > -1) {
      this.filterCat.splice(index, 1);
    } else {
      this.filterCat.push(category);
    }
    document.getElementsByClassName(category)[0]?.classList.toggle('active');
  }
  deletePost(postId: string) {
    this.adminService.deletePost(postId).subscribe({
      next: (response: any) => {
        this.fetchPosts();
      },
      error: (err: any) => {
        console.error('Error deleting post', err);
      },
    });
  }
}
