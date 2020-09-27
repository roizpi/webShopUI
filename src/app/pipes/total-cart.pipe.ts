import {Pipe, PipeTransform} from "@angular/core";
import {Cart} from "../model/cart";
import {ItemCart} from "../model/itemCart"

@Pipe({
  name: 'totalCart'
})
export class TotalCartPipe implements PipeTransform {
  transform(value: Cart): number {
    let total = 0.0;
    if (value !== null && value.items != null) {
      for (let item of value.items) {
        total += item.units * item.book.price;
      }
    }
    return total;
  }
}
