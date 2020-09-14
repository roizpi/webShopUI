import { ItemCart } from './itemCart';

export class Cart {
  locator: string;
  status: string;
  items: ItemCart[];
  date: Date;
  totalUnits: number;
  totalPrice: number;
}
