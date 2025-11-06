import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import { routes } from './app.routes';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu";
import { Search } from "./components/search/search";

@Component({
  selector: 'app-root',
  imports: [ProductList, RouterOutlet, RouterLink, RouterLinkActive, ProductCategoryMenuComponent, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
