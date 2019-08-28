import { ItemOrder } from './itemOrder';

export class Order {
  idOrder: number;
  locator: string;
  status: string;
  name: string;
  secondname: string;
  phone_number: string;
  email: string;
  address: string;
  comment: string;
  items: ItemOrder[];
  totalUnits: number;
  totalPrice: number;
}
