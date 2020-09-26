import {Component, Input} from "@angular/core";
import {Order} from "../model/order";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input() order: Order;
}
