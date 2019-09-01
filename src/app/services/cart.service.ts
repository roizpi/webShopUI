import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reply} from "../model/reply";
import {ShoppingCart} from "../model/shoppingCart";
import {ItemCart} from "../model/itemCart";
import {Order} from "../model/order";


@Injectable()
export class CartService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private cartUrl: string = '/api/cart';

  constructor(private http: HttpClient) { }

  // API call: /api/cart
  createCart(): Promise<ShoppingCart> {
    return this.http.post<Reply>(this.cartUrl, {})
      .toPromise()
      .then(response => response.data as ShoppingCart)
      .catch(CartService.handleError);
  }

  // Adds an item to the cart
  // API call: /api/cart/{locator}/items
  addItemCart(locator: string, item: ItemCart): Promise<ShoppingCart> {
    return this.http.post<Reply>(this.cartUrl + '/' + locator + '/items',
      JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(response => response.data as ShoppingCart)
      .catch(CartService.handleError)
  }

  // Get the items from the shopping cart
  // API call: /api/cart/{locator}
  getCart(locator: string): Promise<ShoppingCart> {
    return this.http.get<Reply>(this.cartUrl + '/' + locator)
      .toPromise()
      .then(response => response.data as ShoppingCart)
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

  private static handleError(error: any): Promise<any> {
    console.error('An error has been produced', error);
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
