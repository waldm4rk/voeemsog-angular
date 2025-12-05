import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Story } from 'app/services/api.service';
import { HostListener } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { AdminService } from 'app/admin.service';
@Component({
  selector: 'app-story',
  imports: [TranslateModule, NgIf],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  storyId!: string;
  data: Story | undefined;
  isAuthorized: boolean = false;
  constructor(private route: ActivatedRoute, private dataService: ApiService, private translate: TranslateModule, private cookies: CookiesService
    , private adminService: AdminService
  ) {}

  ngOnInit(): void {
    // Подписка на параметр id из маршрута
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id')!;
      this.loadStory(this.storyId);
    });
    this.dataService.checkCookie().subscribe({
      next: (response: HttpResponse<void>) => {
        // Любой успешный ответ → авторизован
        this.isAuthorized = true;
      },
      error: (err: HttpErrorResponse) => {
      },
    });
  }
  loadStory(storyId: string){
    this.dataService
      .getData<Story>(`stories/story/${storyId}`)
      .subscribe({
        next: (response: HttpResponse<Story>) => {
          if(response.body){
            this.data = response.body;
            console.log(this.data);
            if((this.cookies.returnLang() == 'en' && this.data.lang != 'en_US') || (this.cookies.returnLang() == 'ru' && this.data.lang != 'ru_RU')){
              window.location.href = "/literature";
            }
          }
        },
        error: (err) => {
          window.location.href = '/error';
        },
    });
  }
  deleteStory(){
    if(!confirm("Удалить историю?")) return;
    this.adminService.deleteStory(this.storyId).subscribe({
      next: (response: HttpResponse<void>) => {
        window.location.href="/literature";
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

//  @HostListener('window:scroll', [])
//   onScroll() {
//     const speed = -0.3; // скорость параллакса одинаковая для всех
//     const cubes = document.querySelectorAll<HTMLElement>('.cube');

//     cubes.forEach(cube => {
//       cube.style.top = `${window.scrollY * speed}px`;
//     });
//   }

}
