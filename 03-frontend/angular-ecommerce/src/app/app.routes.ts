import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';

export const routes: Routes = [
    {path: 'category/:id/:name', component: ProductList},
    {path: 'category/', component: ProductList},
    {path: 'product', component: ProductList},
    {path: '', redirectTo: '/product', pathMatch: 'full'},
    {path: '**', redirectTo: '/product', pathMatch: 'full'}
];
