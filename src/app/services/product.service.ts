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
  removeProduct(id: any) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
<<<<<<< HEAD
  addProduct(data: any) {
    return this.http.post(`http://localhost:3000/products`, data);
=======
   updateProduct(id: any) {
    //
>>>>>>> a213bf318a4a420b573b981edf2aa46bad70e1c4
  }
}
