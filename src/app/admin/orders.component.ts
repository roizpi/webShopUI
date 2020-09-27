import {Component, OnInit} from "@angular/core";
import {OrderService} from "../services/order.service";
import {Order} from "../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  message: String;
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.orderService.getOrders()
      .then(response => this.orders = response);

    var msg = localStorage.getItem('message');
    if (msg !== undefined && msg != null) {
      this.message = msg;
      localStorage.removeItem('message');
    }
  }

  btRemoveOnClick(item: Order) {
    this.message = null;
    if (confirm('Do you wish to remove the order: ' + item.locator + '?')) {
      this.orderService.deleteOrder(item.idOrder)
        .then(response => {
          this.message = response.messages[0].message;
          if (response.messages[0].code === 0) {
            this.orders = this.orders.filter(p => p.idOrder !== item.idOrder);
        }
      });
    }
  }
}
