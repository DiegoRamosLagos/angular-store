import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): any {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(id: string): any {
    this.productsService.deleteProduct(id).subscribe((res) => {
      console.log('Product deleted rta::::', res);
      if (res) {
        const index = this.products.findIndex(
          (product) => product.id === id,
        );
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
