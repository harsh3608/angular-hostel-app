import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'rooms',
        loadChildren: () => import('../app/features/rooms/rooms.module').then(m => m.RoomsModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../app/features/dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
        path:'customers',
        loadChildren: () => import('../app/features/users/users.module').then(m=>m.UsersModule)
    }
];
