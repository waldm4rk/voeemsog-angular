import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Story } from 'app/services/api.service';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  storyId!: string;
  data: Story | never[] | undefined;
  constructor(private route: ActivatedRoute, private dataService: ApiService) {}

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
          this.data = response.body || [];
          console.log(this.data);
        },
        error: (err) => {
        },
      });
  }
}
