import { Component, OnInit } from '@angular/core';
// import { PeopleServiceService } from './people-service.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  people = [];
  total: number = 0;
  products: Product[];

  constructor() {
    this.products = new Array<Product>();
    this.products.push(new Product('Fist One', 'lala blabla', 'http://placehold.it/800x500', 3));
    this.products.push(new Product('Second hand', 'OHOOHOa', 'http://placehold.it/800x500', 6));
    this.products.push(new Product('Destructor', 'petite description', 'http://placehold.it/800x500', 10));
    this.products.push(new Product('Hello', 'lalla oblabho lorem', 'http://placehold.it/800x500', 69))
  }

  ngOnInit() {
    console.log('init');
  }

  addToBasket(product: Product) {
    this.total += product.price;
  }
}
