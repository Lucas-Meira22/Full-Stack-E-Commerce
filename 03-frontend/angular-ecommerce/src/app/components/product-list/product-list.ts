import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  
  products: Product [] = [];
  currentCategoryId!: number;
  currentCategoryName!: string ;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.handleSearchProducts();

    }else{

      this.handleListProducts();
    }
  }

  handleSearchProducts(){

    const keyword: string  = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProduct(keyword).subscribe(
      data => {
        console.log(`data= ${data}`);
        this.products = data;
      });
  }
  handleListProducts(){
    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // the "name" route parameter is a string — don't coerce it to a number
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } 
    else {
      //not category id available ... default to category id 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }
    this.productService.getProductList(this.currentCategoryId).subscribe(data => {
      
      this.products = data;
    });
  }
}
