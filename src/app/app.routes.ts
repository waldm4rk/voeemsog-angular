import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdminComponent } from './admin/admin.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LiteratureComponent } from './literature/literature.component';
import { StoryComponent } from './story/story.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AdminChooseComponent } from './admin-choose/admin-choose.component';
import { NewsComponent } from './news/news.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { LicenseComponent } from './license/license.component';
import { AdminStoriesComponent } from './admin-stories/admin-stories.component';

export const routes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "room",
        component: RoomComponent
    },
    {
        path: "rooms",
        component: RoomsComponent
    },
    {
        path: "admin",
        component: AdminLoginComponent
    },
    {
        path: "archive",
        component: ArchiveComponent
    },
    {
        path: "admin/rooms",
        component: AdminComponent
    },
    {
        path: "literature",
        component: LiteratureComponent
    },
    {
        path: "story/:id",
        component: StoryComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
  {
        path: "error",
        component: ErrorComponent
    },
    {
        path: "admin/choose",
        component: AdminChooseComponent
    },
    {
        path: "news",
        component: NewsComponent
    },
    {
        path: "admin/news",
        component: AdminNewsComponent
    },
    {
        path: "license",
        component: LicenseComponent
    },
    {
        path: "admin/stories",
        component: AdminStoriesComponent
    },

    {path: '**', component: ErrorComponent}
];
