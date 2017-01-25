import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UpperCasePipe } from '@angular/common';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class ProductService {

  products: Product[] = [];
  private API_URL: string = 'http://localhost:8080/rest/products';

  constructor(public uppercase: UpperCasePipe, private http: Http) {
  }

  getProducts() : Observable<Product[]> {
    return this.http.get(this.API_URL)
               .map((r: Response) => r.json() as Product[])
               .map(productList => {
                 return productList.map(p => {
                   p.title = this.uppercase.transform(p.title)
                   return p;
                 })
               })
               .do(p => this.products = p);
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
