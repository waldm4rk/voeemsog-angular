import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ArchiveComponent } from './archive/archive.component';
import { LiteratureComponent } from './literature/literature.component';
import { StoryComponent } from './story/story.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './news/news.component';
import { LicenseComponent } from './license/license.component';
import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './album/album.component';
import { MainruComponent } from './mainru/mainru.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ru', component: MainruComponent },
  { path: 'room', component: RoomComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'literature', component: LiteratureComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'news', component: NewsComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'music', component: MusicComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'admin', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/rooms', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/choose', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/news', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/stories', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/music', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
