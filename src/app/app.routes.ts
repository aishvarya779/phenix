import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        // component: HomeComponent
        loadChildren: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path:'forms',
        loadComponent: () => import('./forms/forms.component').then(m => m.FormsComponent)
    },
    {
        path: 'products',
        component: ProductsComponent,
        loadChildren: () => import('./products/products.routes').then(m => m.prdocutsRoutes)
    },
    {
        path: '**',
        redirectTo:'/'
    }
];
