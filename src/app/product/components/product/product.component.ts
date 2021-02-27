import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent
  implements /*OnChanges*/ OnInit, OnDestroy {
  @Input() // Property binding
  product: Product;

  @Output() // Event binding
  productAdded: EventEmitter<any> = new EventEmitter();

  today: Date = new Date();

  constructor(private cartService: CartService) {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log('2. ngOnChanges');
  //     console.log(changes);
  // }

  ngOnInit(): void {
    // exexuted only 1 time
    console.log('3. ngOnInit');
  }

  // ngDoCheck(): void {
  //   console.log('4. ngDoCheck');
  // }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addToCart(): void {
    this.cartService.addCart(this.product);
  }
}
