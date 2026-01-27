import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { CartDetails } from './components/cart-details/cart-details';

export const routes: Routes = [
    {path: 'products/:id', component: ProductDetails},
    {path: 'cart-details', component: CartDetails},
    {path: 'search/:keyword', component: ProductList},
    {path: 'category/:id/:name', component: ProductList},
    {path: 'category/', component: ProductList},
    {path: 'product', component: ProductList},
    {path: '', redirectTo: '/product', pathMatch: 'full'},
    {path: '**', redirectTo: '/product', pathMatch: 'full'}
];
