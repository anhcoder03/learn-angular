import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../interface/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title = 'Quản lý sản phẩm';
  status: boolean = false;
  products: IProduct[] = [];
  constructor(private productSevice: ProductService) {}

  ngOnInit() {
    this.productSevice.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  // @Input() products: IProduct[] = [];
  // @Output() onRemove = new EventEmitter<any>();
  // removeItem(id: any) {
  //   this.onRemove.emit(id);
  // }
  removeItem(id: any) {
    const confirm = window.confirm('Bạn có muốn xoá không?');
    if (confirm) {
      this.productSevice.removeProduct(id).subscribe((item) => {
        alert(`Xoá thành công sản phẩm ${id}`);
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  }
  setOn() {
    this.status = !this.status;
  }

  setTitle(event: any) {
    this.title = event.target.value;
  }
}
