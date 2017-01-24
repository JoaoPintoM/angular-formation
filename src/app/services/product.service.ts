import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  products: Product[];

  constructor() {
    this.products = new Array<Product>();
    this.products.push(new Product('Fist One', 'lala blabla', 'http://placehold.it/800x500', 3, 3));
    this.products.push(new Product('Second hand', 'OHOOHOa', 'http://placehold.it/800x500', 6, 2));
    this.products.push(new Product('Destructor', 'petite description', 'http://placehold.it/800x500', 10, 4));
    this.products.push(new Product('Hello', 'lalla oblabho lorem', 'http://placehold.it/800x500', 69, 1 ))
  }

  getProducts() {
    return this.products;
  }

  private findProduct(productTitle: string): Product {
    return this.products.find(x => x.title === productTitle);
  }

   isTheLast(productTitle: string) {
     const p = this.findProduct(productTitle);

     if (p.stock === 1) {
       return true;
     }
     return false;
   }

   isAvailable(productTitle: string) {
     const p = this.findProduct(productTitle);

     if (p.stock > 0) {
       return true;
     }
     return false;
   }

   decreaseStock(productTitle: string) :void {
     const p = this.findProduct(productTitle);
     p.stock -= 1;
   }
}
