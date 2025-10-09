import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  
  products: Product [] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }
}
