import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'mySort'
})
export class MySortPipe implements PipeTransform {

  transform(value: Product[], args?: any): Product[] {
    return value.sort((a, b) => {
      return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
    });
  }

}
