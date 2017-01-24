import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class CustomerService {

  products: Product[];
  total: number;

  constructor() {
    this.products = new Array<Product>();
    this.total = 0;
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.total += product.price;
  }

  getTotal() {
    return this.total;
  }

}
