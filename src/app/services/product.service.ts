import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../components/interface/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  removeProduct(id: any) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  addProduct(data: any) {
    return this.http.post(`http://localhost:3000/products`, data);
  }
  updateProduct(id: number, data: any) {
    return this.http.put(`http://localhost:3000/products/${id}`, data);
  }
  relatedProducts(categoryId: any) {
    return this.http.get(
      `http://localhost:3000/categories/${categoryId}?_embed=products`
    );
  }
}
