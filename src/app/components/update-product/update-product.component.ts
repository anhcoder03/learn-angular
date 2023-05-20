import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../interface/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  productId: any;
  productData: IProduct = { id: 0, name: '', price: 0, img: '' };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe((data) => {
      this.productData = data;
      console.log(this.productData);
    });
  }
  handleUpdateProduct(event: Event) {
    event.preventDefault();
    console.log(this.productData);
    this.productService
      .updateProduct(this.productId, this.productData)
      .subscribe(
        (response) => {
          alert('Data update successfully');
          this.router.navigateByUrl('/admin/product');
        },
        (error) => {
          alert(error);
          console.error('Error posting data', error);
        }
      );
  }
}
