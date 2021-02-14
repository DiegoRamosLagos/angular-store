import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductModule {}
