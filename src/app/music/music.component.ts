import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { CookiesService } from 'app/cookies.service';
import { Album, ApiService } from 'app/services/api.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForOf, NgStyle, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-music',
  imports: [TranslateModule, NgForOf],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})

export class MusicComponent {
  constructor(
    private translate: TranslateModule,
    private title: Title,
    private cookies: CookiesService,
    private apiService: ApiService
  ){}
  albums: Album[] = [];
  ngOnInit(){
    if(this.cookies.returnLang() == 'ru'){
      this.title.setTitle("Voeemsog | Музыка");
    }else if(this.cookies.returnLang() == 'en'){
      this.title.setTitle("Voeemsog | Music");
    }
    this.apiService.getData<Album[]>("music/albums").subscribe({
      next: (response: HttpResponse<Album[]>) => {
        this.albums = response.body || [];
        console.log(this.albums);
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }
  redirectTo(albumId: string){
    window.location.href = "/album/" + albumId;
  }
}
