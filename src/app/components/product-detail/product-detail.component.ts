import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../interface/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productId: any;
  category: any;
  productByCategory: IProduct[] = [];
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
      this.productService.relatedProducts(data.categoryId).subscribe((data) => {
        this.category = data;
        this.productByCategory = this.category.products;
      });
    });
  }
}
