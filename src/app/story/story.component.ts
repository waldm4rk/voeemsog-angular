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
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-story',
  imports: [TranslateModule, NgIf, RouterModule],
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
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id')!;
      this.loadStory(this.storyId);
    });
    this.dataService.checkCookie().subscribe({
      next: (response: HttpResponse<void>) => {
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
  editStory(){

  }
}
