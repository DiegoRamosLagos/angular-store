import {
  Component,
  EventEmitter,
  Input,
  Output,
  /*OnChanges*/ DoCheck,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent
  implements /*OnChanges*/ DoCheck, OnInit, OnDestroy {
  @Input() // Property binding
  product: Product;

  @Output() // Event binding
  productAdded: EventEmitter<any> = new EventEmitter();

  today: Date = new Date();

  constructor() {
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

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addToCart(): void {
    console.log('Add to cart');
    this.productAdded.emit(this.product.id);
  }
}
