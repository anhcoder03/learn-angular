import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productData: any = { id: '', name: '', price: null, img: null };
  constructor(private productSevice: ProductService, private router: Router) {}
  submitForm(event: Event) {
    event.preventDefault();
    this.productSevice.addProduct(this.productData).subscribe(
      (response) => {
        alert('Data posted successfully');
        this.router.navigateByUrl('/admin/product');
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
}
