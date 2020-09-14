import { ItemCart } from './itemCart';

export class ShoppingCart {
  locator: string;
  status: string;
  items: ItemCart[];
  date: Date;
  totalUnits: number;
  totalPrice: number;
}
