import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../common/product';
import {CurrencyPipe} from '@angular/common';
import { CartService } from '../../services/cart-service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{
  
  product!: Product;
  
  constructor(private productSevice: ProductService, private route: ActivatedRoute, private cartService: CartService){}
  
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
  addToCart() {
    console.log(`adding to cart: ${this.product.name} , ${this.product.unitPrice}`);

    const theCartItem = new CartItem(this.product.id, this.product.name, this.product.imageUrl, this.product.unitPrice, 1);

    this.cartService.addToCart(theCartItem);
  }
}
