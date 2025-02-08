import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
export const prdocutsRoutes: Routes = [
    // {
    //     path: '',
    //     component: ProductsComponent
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'detail'
    },
    {
        path: 'detail',
        component: ProductDetailComponent
    }
];