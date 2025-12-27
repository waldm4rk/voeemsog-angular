import { Component, NgModule } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
import { AdminService } from 'app/admin.service';
import { Album, ApiService, Track } from 'app/services/api.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-admin-music',
  imports: [NgIf, NgForOf, FormsModule],
  templateUrl: './admin-music.component.html',
  styleUrl: './admin-music.component.scss',
  standalone: true
})
export class AdminMusicComponent {
  isAuthorized: boolean = false;
  albums: Album[] = [];
  currentAlbum: Album = {id: "", title: "", description: "", description_ru: "", coverLink: ""};
  tracks: Track[] = [];
  ordered: boolean = false;
  constructor(
    private cookies: CookiesService,
    private admin: AdminService,
    private dataService: ApiService,
    private router: Router
  ){}
  trackByFn(index: number, track: Track): string {
  // Убедитесь, что 'track.id' содержит уникальный UUID, который приходит с сервера
    return track.id || index.toString(); 
  } 
  ngOnInit(){
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
  }
  postInit(){
    this.dataService.getData<Album[]>("music/albums").subscribe({
      next: (response: HttpResponse<Album[]>) => {
        this.albums = response.body!;
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    })
  }
  tryPublish(event: Event){
    event.preventDefault();
    if(!confirm("Опубликовать альбом?")) return;
    this.getTrackOrderNumbers();
    this.tracks.forEach((track, index) => {
      track.album_id = this.currentAlbum.id;
      track.order = index;
      console.log(track);
    });
  
    this.admin.putAlbum(this.currentAlbum);
    this.admin.putTracks(this.tracks);
  }
  getTrackOrderNumbers(){
    for(let i = 0; i < this.tracks.length; i++){
      this.tracks[i].order = i;
      this.tracks[i].album_id = this.currentAlbum.id;
    }
  }
  getInfo(){
    const listOfAlbums = document.getElementById("albumSelect") as HTMLSelectElement;
    const selectedAlbum = listOfAlbums.selectedOptions.item(0)?.value;
    if(selectedAlbum == "NEW") return;
    this.dataService.getData<Album>(`music/album/${selectedAlbum}`).subscribe({
      next: (response: HttpResponse<Album>) => {
        this.currentAlbum = response.body!;
        this.getTracks();
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    });
  }
  getTracks(){
    this.dataService.getData<Track[]>(`music/tracks/${this.currentAlbum.id}`).subscribe({
      next: (response: HttpResponse<Track[]>) => {
        this.tracks = response.body!;
        console.log("IDs:", this.tracks.map(t => t.id));
        this.tracks = [...this.tracks].sort((a, b) => a.order - b.order);
        this.ordered = true;
        console.log(this.tracks);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    });
  }
  addTrack(){
    this.tracks.push({'id':'', 'description':'','description_ru':'', 'link':'', 'order': 0, 'album_id': ''});
    this.ordered = true;
  }
  deleteTrack(index: number){
    this.tracks.splice(index, 1);
  
    // 💡 Важно: Пересоздайте массив, чтобы Angular заметил изменение
    this.tracks = [...this.tracks];
    const toDelete = document.getElementsByClassName("track")[index] as HTMLDivElement;
    toDelete.remove();
  }
}
