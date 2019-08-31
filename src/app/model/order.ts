import { ItemOrder } from './itemOrder';

export class Order {
  idOrder: number;
  locator: string;
  status: string;
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
