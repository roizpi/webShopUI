import { ItemBasket } from './itemBasket';

export class Basket {
  locator: string;
  status: string;
  items: ItemBasket[];
  date: Date;
  totalUnits: number;
  totalPrice: number;
}
