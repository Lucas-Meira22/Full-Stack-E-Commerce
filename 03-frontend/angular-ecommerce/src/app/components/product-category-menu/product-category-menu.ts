import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category-menu',
  imports: [ RouterModule, CommonModule ],
  templateUrl: './product-category-menu.html',
  styleUrls: ['./product-category-menu.css'] // fix here
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories(): void {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories: ' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }
}


