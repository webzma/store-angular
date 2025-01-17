import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  });

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
