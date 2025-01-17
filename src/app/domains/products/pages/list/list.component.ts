import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productsService = inject(ProductService);

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products) => this.products.set(products),
      error: (error) => console.error(error),
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
