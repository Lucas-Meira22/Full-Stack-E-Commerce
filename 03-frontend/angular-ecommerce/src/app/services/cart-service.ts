import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  alreadyExistsInCart: boolean = false;
  existingCartItem: CartItem | undefined;

  constructor(){}

  addToCart(theCartItem: CartItem){
    //check if we already have the item on our cart
    
    if (this.cartItems.length > 0) {
      
      this.existingCartItem = this.cartItems.find(tempcartItem => 
      tempcartItem.id == theCartItem.id);
      
      this.alreadyExistsInCart = (this.existingCartItem != undefined);
    }
    
    if (this.alreadyExistsInCart) {
      //increment totalQuantity
      if (this.existingCartItem) {
        this.existingCartItem.quantity++;
      } 
    }
    else{
      this.cartItems.push(theCartItem); 
    }

    //compute cart total price and total quantity
    this.computeCartTotals();
  }


  computeCartTotals() {
    
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values .. all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //log cart data
    this.logCartData(totalPriceValue, totalQuantityValue)
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log(`Contents of the cart`);
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`$name=${tempCartItem.name}, qty=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`)
    }
    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}`);
  }
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if(theCartItem.quantity == 0){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
    //get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id == theCartItem.id);
    // if found remove the item from the cart at the index
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
