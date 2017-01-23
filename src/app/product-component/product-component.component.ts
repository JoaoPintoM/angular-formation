import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input() product: Product;
  @Output() addToBasket = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.addToBasket.emit(this.product);
  }

}
