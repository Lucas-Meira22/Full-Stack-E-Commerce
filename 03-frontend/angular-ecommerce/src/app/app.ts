import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [ProductList, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
