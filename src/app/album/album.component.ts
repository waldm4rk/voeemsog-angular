import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Album, ApiService, Track } from 'app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgFor, NgForOf } from '@angular/common';
import { CookiesService } from 'app/cookies.service';
@Component({
  selector: 'app-album',
  imports: [TranslateModule, NgForOf],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  albumId!: string;
  album!: Album;
  tracks: Track[] = [];
  safeEmbeds: SafeResourceUrl[] = [];
  constructor(
    private translate: TranslateModule,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    public cookies: CookiesService,
  ){}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id')!;
      this.loadAlbum(this.albumId);
    });
  }
  loadAlbum(albumId: string){
    this.apiService.getData<Album>(`music/album/${albumId}`).subscribe({
      next: (response: HttpResponse<Album>) => {
        this.album = response.body!;
        this.loadTracks();
      }, error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }
  loadTracks(){
    this.apiService.getData<Track[]>(`music/tracks/${this.albumId}`).subscribe({
      next: (response: HttpResponse<Track[]>) => {
        this.tracks = response.body || [];
        this.safeEmbeds = this.tracks.map(track =>
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.link)}`
          )
        );
      }, error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }
  getTrackInfo(url: SafeResourceUrl): Track{
    return this.tracks.at(this.safeEmbeds.indexOf(url))!;
  }
}
