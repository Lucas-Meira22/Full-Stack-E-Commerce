import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule],
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css'
})
export class CartDetails implements OnInit {



  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0 ; 

  constructor(private cartService: CartService){}
  
  
  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
      //handle to the cart items
    this.cartItems = this.cartService.cartItems;

      //subscribe the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data=> this.totalPrice = data);
    
      //subscribe the cart totalQuantity
      this.cartService.totalQuantity.subscribe(
      data=> this.totalQuantity = data);

      // compute cart total price and quantity
      this.cartService.computeCartTotals();
    
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
}

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  
  }

  removeItem(theCartItem: CartItem){
    this.cartService.remove(theCartItem);
  }

}
