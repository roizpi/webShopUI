import {Pipe, PipeTransform} from "@angular/core";
import {ItemCart} from "../model/itemCart";

@Pipe({
  name: 'priceItem'
})
export class PriceItemPipe implements PipeTransform {
  transform(value: ItemCart): number {
    let total = 0;
    if (value !== null && value.units != null) {
      total = value.units * value.book.price;
    }
    return total;
  }
}
