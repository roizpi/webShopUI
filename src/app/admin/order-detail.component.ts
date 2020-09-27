import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";
import {Order} from "../model/order";
import {ItemOrder} from "../model/itemOrder";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {

  title: String = "Detail";
  messages: String[] = [];
  order: Order = new Order();
  status: String[] = ["CREATED", "PAID", "SENT", "FINISHED", "RETURNED"];

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('id');
        if (parseInt(id) > 0) {
          return this.orderService.getOrder(+params.get('id'));
        } else {
          return this.orderService.getOrderByLocator(id);
        }
      })
    ).subscribe(order => this.order = order);
  }

  btAcceptOnClick() {
    this.orderService.updateStatusOrder(
      this.order.idOrder, this.order.status)
      .then(response => {
        if (response.data != null) {
          localStorage.setItem('message', 'Order has been modified ' + response.data.locator);
          this.router.navigate(["/administrator/orders"]);
        } else {
          this.messages = [];
          for (let msg of response.messages) {
            this.messages.push(msg.message);
          }
        }
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
