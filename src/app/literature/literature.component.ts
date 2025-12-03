import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { CookiesService } from 'app/cookies.service';
import { ApiService, StoryCategory } from 'app/services/api.service';
import { Story } from 'app/services/api.service';
import { HttpResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MapToArrayPipe } from 'app/services/map-to-array';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-literature',
  imports: [TranslateModule, NgFor, MapToArrayPipe, CommonModule, RouterModule],
  templateUrl: './literature.component.html',
  styleUrl: './literature.component.scss'
})
export class LiteratureComponent {
  constructor(
    private translate: TranslateModule,
    private translateService: TranslateService,
    private cookies: CookiesService,
    private title: Title,
    private service: ApiService,
    private router: Router,
    private meta: Meta
  ) {}
  stories = new Map<string, Story[]>;
  langCode = "en_US";
  ngOnInit(){
    this.translateService.use(this.cookies.returnLang()).subscribe((translations: any) => {
      this.title.setTitle("Voeemsog | " + (translations?.['MAIN']?.['LITERATURE'] ?? "Literature"));
    });
    this.fetchData();
  this.meta.updateTag({name: 'description', content:"Voeemsog books and short stories are here absolutely for free!"})

  }
  fetchData(){
    this.fetchCategories();
  }
  fetchCategories(){
    this.langCode = this.cookies.returnLang() == "en" ? "en_US" : "ru_RU";
    this.service
      .getData<StoryCategory[]>(`stories/categories?lang=${this.langCode}`)
      .subscribe({
        next: (response: HttpResponse<StoryCategory[]>) => {
          // Access the status code here:
          const statusCode = response.status;
          // if(statusCode != 200){
          //   this.lastPage = this.page;
          //   this.updateButtonStates(false);
          //   return;
          // }

          // Access the body (the data) and default to an empty array if null:
          const categories: StoryCategory[] = response.body ?? [];
          categories.forEach(cat => {
            this.stories.set(cat.id, []);
            console.log(cat.id);
          });
          this.fetchStories();
        },
        error: (err) => {
          // Error handler often contains the status code for non-2xx responses
          const errorStatusCode = err.status; // This works for errors like 4xx and 5xx
          console.error(`HTTP Error Status Code: ${errorStatusCode}`);
        },
      });
  }
  fetchStories(){
    for(const [key, value] of this.stories){
    this.service
      .getData<Story[]>(`stories/${key}?lang=${this.langCode}`)
      .subscribe({
        next: (response: HttpResponse<Story[]>) => {
          const stories = response.body ?? [];
          this.stories.set(key, stories);
          console.log(this.stories);
        },
        error: (err) => {
          // Error handler often contains the status code for non-2xx responses
          const errorStatusCode = err.status; // This works for errors like 4xx and 5xx
          console.error(`HTTP Error Status Code: ${errorStatusCode}`);
        },
      });
    }
  }
  redirectToPage(id: string): void {
    this.router.navigateByUrl('/story/' + id);
    console.log("aaa");
  }
}
