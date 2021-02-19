import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsPath = '/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.url_api + this.productsPath,
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(
      environment.url_api + this.productsPath + `/${id}`,
    );
  }
}
