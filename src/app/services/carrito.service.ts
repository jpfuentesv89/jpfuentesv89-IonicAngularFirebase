import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService  {

  private cart = [];

  private cartItemCount = new BehaviorSubject(0);

  constructor() { 

  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.cantidad += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.cantidad = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.cantidad);
        this.cart.splice(index, 1);
      }
    }
  }
  
  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
  }

}
