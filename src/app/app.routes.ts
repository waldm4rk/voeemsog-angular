import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdminComponent } from './admin/admin.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LiteratureComponent } from './literature/literature.component';
import { StoryComponent } from './story/story.component';
import { ErrorComponent } from './error/error.component';

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
        path: "admin-dashboard",
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
        path: "error",
        component: ErrorComponent
    },



    {path: '**', component: ErrorComponent}
];
