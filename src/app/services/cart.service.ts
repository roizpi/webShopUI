import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reply} from "../model/reply";
import {Cart} from "../model/cart";
import {ItemCart} from "../model/itemCart";
import {Order} from "../model/order";


@Injectable()
export class CartService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private cartUrl: string = '/api/cart';

  constructor(private http: HttpClient) { }

  // API call: /api/cart
  createCart(): Promise<Cart> {
    return this.http.post<Reply>(this.cartUrl, {})
      .toPromise()
      .then(response => response.data as Cart)
      .catch(CartService.handleError);
  }

  // Adds an item to the cart
  // API call: /api/cart/{locator}/items
  addItemCart(locator: string, item: ItemCart): Promise<Cart> {
    return this.http.post<Reply>(this.cartUrl + '/' + locator + '/items',
      JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(response => response.data as Cart)
      .catch(CartService.handleError)
  }

  // Get the items from the shopping cart
  // API call: /api/cart/{locator}
  getCart(locator: string): Promise<Cart> {
    return this.http.get<Reply>(this.cartUrl + '/' + locator)
      .toPromise()
      .then(response => response.data as Cart)
      .catch(CartService.handleError);
  }

  // API call: /api/cart/{locator}/order
  confirmOrder(locator: string, order: Order): Promise<Order> {
    return this.http.post<Reply>(this.cartUrl + '/' + locator + '/order',
      JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(response => response.data as Order)
      .catch(CartService.handleError);
  }

  public calcTotal(cart: Cart) {
    if (cart !== null) {
      cart.totalPrice = 0;
      cart.totalUnits = 0;

      if(cart.items != null) {
        for (let item of cart.items) {
          cart.totalUnits += item.units;
          cart.totalPrice += item.units * item.book.price;
        }
      }
    }
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error has been produced', error);
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
