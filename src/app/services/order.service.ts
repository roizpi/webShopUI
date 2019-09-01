import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../model/order";
import {Reply} from "../model/reply";

@Injectable()
export class OrderService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private ordersUrl: string = '/api/orders';

  constructor(private http: HttpClient) {}

  // Returns a single order from id.
  // API call: /api/orders/{id}
  getOrder(id: number): Promise<Order> {
    return this.http.get<Reply>(
      this.ordersUrl + '/' + id)
      .toPromise()
      .then(response => response.data as Order)
      .catch(OrderService.handleError);
  }

  // Returns all orders as list
  // API call: /api/orders
  getOrders(): Promise<Order[]> {
    return this.http.get<Reply>(this.ordersUrl).toPromise()
      .then(response => response.data as Order[])
      .catch(OrderService.handleError);
  }

  // Returns an order by locator
  // API call: /api/orders?locator={locator}
  getOrderByLocator(locator: string): Promise<Order> {
    return this.http.get<Reply>(
      this.ordersUrl + '?locator=' + locator)
      .toPromise()
      .then(response => response.data[0] as Order)
      .catch(OrderService.handleError)
  }

  // Removes an order
  // API call: /api/orders/{id}
  deleteOrder(id: number): Promise<Reply> {
    return this.http.delete<Reply>(this.ordersUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => response.data as Reply)
      .catch(OrderService.handleError)
  }

  // Updates the order status
  // API call: PUT /api/pedidos/{id}
  updateStatusOrder(id: number, status:string): Promise<Reply> {
    let order = new Order();
    order.idOrder = id;
    order.status = status;
    return this.http.put<Reply>(
      this.ordersUrl + '/' + id, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(response => response.data as Reply)
      .catch(OrderService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error has been produced', error);
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
