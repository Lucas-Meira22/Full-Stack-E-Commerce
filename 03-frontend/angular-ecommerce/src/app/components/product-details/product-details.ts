import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../common/product';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{

  product!: Product;

  constructor(private productSevice: ProductService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }
  handleProductDetails() {
  //get the id param string. convert string to a numb using the + symbol
  const prodId: number = +this.route.snapshot.paramMap.get('id')!;

  this.productSevice.getProduct(prodId).subscribe(data => {
    this.product = data;
  } )
  }
}
