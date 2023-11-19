import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order-true',
  templateUrl: './order-true.component.html',
  styleUrls: ['./order-true.component.css']
})
export class OrderTrueComponent implements OnInit {
  paymentMethod: string = '';
  product: any = {};
  constructor(private route:ActivatedRoute,private productService:ProductService)  { }

  ngOnInit(): void {
    // Nhận thông tin từ queryParams
    this.route.queryParams.subscribe((params) => {
      this.paymentMethod = params['paymentMethod'] || 'Unknown Payment Method';
      
      // Lấy thông tin sản phẩm từ queryParams
      const productId = params['productId'];
      if (productId) {
        this.productService.getOneProduct(productId).subscribe((data) => {
          this.product = data;
        });
      }
    });
  }}
