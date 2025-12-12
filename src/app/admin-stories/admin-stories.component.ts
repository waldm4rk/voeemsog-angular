import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, PostDTO, StoryDTO } from 'app/admin.service';
import { ApiService, Story, StoryCategory } from 'app/services/api.service';
import { NgIf, NgForOf } from '@angular/common';
import { CookiesService } from 'app/cookies.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-stories',
  imports: [NgIf, NgForOf, FormsModule],
  templateUrl: './admin-stories.component.html',
  styleUrl: './admin-stories.component.scss'
})
export class AdminStoriesComponent {
  constructor(private dataService: ApiService, private router: Router, private adminService: AdminService, private cookies: CookiesService, private route: ActivatedRoute) {}
  langCode: string = 'en_US';
  isAuthorized: boolean = false;
  
  story: StoryDTO = {
    id: '',
    title: '',
    text: '',
    category: {id: -1},
    readingTime: 0,
    lang: 'en_US',
    order: -1
  };

  categories: StoryCategory[] = [];

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
    this.story.id = this.route.snapshot.queryParamMap.get('id') || '';
    this.story.title = this.route.snapshot.queryParamMap.get('title') || '';
    this.story.text = this.route.snapshot.queryParamMap.get('text') || '';
  } 
  postInit(){
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }

    this.getCategories();
  }

  getCategories(): void{
    this.dataService.getData<StoryCategory[]>(`stories/categories?lang=${this.langCode}`).subscribe({
      next: (response: HttpResponse<StoryCategory[]>) => {
        this.categories = response.body || [];
        console.log(this.categories);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  submitStory(){
    if(this.story.title.trim().length == 0
    || this.story.text.trim().length == 0
    || this.story.category.id < 0){
      alert("Заполните все поля корректно!");
    }
    if(!confirm("Подтвердите публикацию истории")) return;
    this.story.lang = this.langCode;
    let length = this.story.text.split(' ').length;
    console.log(length);
    if(length < 200) this.story.readingTime = 1;
    else if(length < 400) this.story.readingTime = 2;
    else if(length < 700) this.story.readingTime = 4;
    else if(length < 1000) this.story.readingTime = 6;
    else if(length > 1000) this.story.readingTime = 10;
    console.log(this.story.readingTime);
    this.adminService.postReq("admin/story", this.story).subscribe({
      next: (response: HttpResponse<void>) => {
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }
}