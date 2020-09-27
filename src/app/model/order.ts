import { ItemOrder } from './itemOrder';

export class Order {
  idOrder: number;
  locator: string;
  status: string;
  date: Date;
  name: string;
  secondName: string;
  phoneNumber: string;
  email: string;
  address: string;
  comment: string;
  items: ItemOrder[];
  totalUnits: number;
  totalPrice: number;
}
