import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'quantity',
})
export class QuantityPipe implements PipeTransform {
  constructor(private cartService: CartService) {}
  transform(value: Product): number {
    let cant = 0;
    this.cartService.cart$.subscribe((elements) => {
      elements.forEach((element) => {
        if (element.id === value.id) {
          cant = cant + 1;
        }
      });
    });
    return cant;
  }
}
