import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class CustomerService {

  products: Product[];
  private API_URL: string = 'http://localhost:8080/rest/basket';
  total: number;

  constructor(private http: Http) {
    this.products = new Array<Product>();
    this.total = 0;
  }

  addProduct(product: Product) {
    return this.http.post(this.API_URL, product)
                .map((r: Response) => r.json())
                .do(product => {
                  this.products.push(product);
                  this.total += product.price;
                });
  }

  getTotal() {
    // return this.http.get(this.API_URL)
    //            .map((r: Response) => r.json() as Product[])
      return this.getBasket()
               .map((products) => products.map(p => p.price))
               .map(totals => {
                 return totals.reduce((acc, p) => {
                    return acc + p
                  }, 0)
               });
  }

  getBasket() {
    return this.http.get(this.API_URL)
               .map((r: Response) => r.json() as Product[])
  }



}
