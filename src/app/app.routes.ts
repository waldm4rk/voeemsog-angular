import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';

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
    }
];
