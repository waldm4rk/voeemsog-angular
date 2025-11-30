import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Story } from 'app/services/api.service';
import { HostListener } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-story',
  imports: [TranslateModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  storyId!: string;
  data: Story | undefined;
  constructor(private route: ActivatedRoute, private dataService: ApiService, private translate: TranslateModule, private cookies: CookiesService) {}

  ngOnInit(): void {
    // Подписка на параметр id из маршрута
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id')!;
      this.loadStory(this.storyId);
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

 @HostListener('window:scroll', [])
  onScroll() {
    const speed = -0.3; // скорость параллакса одинаковая для всех
    const cubes = document.querySelectorAll<HTMLElement>('.cube');

    cubes.forEach(cube => {
      cube.style.top = `${window.scrollY * speed}px`;
    });
  }

}
