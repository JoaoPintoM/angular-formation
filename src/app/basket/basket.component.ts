import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  total: number = 0;
  products: Product[] = [];
  customer: Customer;

  constructor(
      public customerService: CustomerService) {
        this.customer = new Customer('', '', '');
  }

  ngOnInit() {
    this.customerService
          .getBasket()
          .subscribe(products => this.products = products);
  }

  onSubmit() {
    this.customerService.checkout(this.customer)
        .subscribe((c) => console.log(c));
  }
}
