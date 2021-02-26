import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): any {
    this.productsService
      .getProduct(id)
      .subscribe((prod) => (this.product = prod));
  }

  createProduct(): any {
    const newProduct: Product = {
      id: '222',
      title: 'New from angular',
      image: 'assets/images/mug.png',
      price: 3000,
      description: 'new product',
    };
    this.productsService
      .createProduct(newProduct)
      .subscribe((product) => console.log(product));
  }

  updateProduct(): any {
    const updateProduct: Partial<Product> = {
      price: 555555,
      description: 'edicion titulo',
    };
    this.productsService
      .updateProduct('2', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct(): any {
    this.productsService.deleteProduct('222').subscribe((rta) => {
      console.log(rta);
    });
  }
}
