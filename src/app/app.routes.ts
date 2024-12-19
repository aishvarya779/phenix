import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrfoileComponent } from './prfoile/prfoile.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: PrfoileComponent
    },
    {
        path: '**',
        redirectTo:'/'
    }
];
