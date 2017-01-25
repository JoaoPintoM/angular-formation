import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from './people-service.service';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  people = [];
  total: number = 0;
  products: Product[] = [];

  constructor(
      public productService: ProductService,
      public customerService: CustomerService) {

      this.getTotalCall();
  }

  ngOnInit() {
    this.productService
          .getProducts()
          .subscribe((p) => {
            this.products = p;
          });
  }

  isAvailable(product: Product) {
    return this.productService.isAvailable(product.title);
  }

  addToBasket(product: Product) {
    // this.customerService.addProduct(product);

    this.customerService
          .addProduct(product)
          .subscribe((p) => {
            this.getTotalCall();
            this.productService.decreaseStock(product.title);
          });


    // this.total = this.customerService.getTotal();
  }

  getTotalCall() {
    this.customerService.getTotal()
        .subscribe(t => this.total = t);
  }

  getTotal() {
    return this.total;
  }
}
