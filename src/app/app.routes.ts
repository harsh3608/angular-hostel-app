import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'rooms',
        loadChildren: () => import('../app/features/rooms/rooms.module').then(m => m.RoomsModule)
    }
];
