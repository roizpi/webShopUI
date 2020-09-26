import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cart} from "../model/cart";
import {CartService} from "../services/cart.service";
import {Order} from "../model/order";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() cart: Cart;
  @Input() order: Order;
  @Output() onOrderSummary = new EventEmitter<Order>();
  @Output() onCart = new EventEmitter();

  name: FormControl;
  secondName: FormControl;
  phoneNumber: FormControl;
  email: FormControl;
  address: FormControl;
  comment: FormControl;
  orderForm: FormGroup;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.name = new FormControl(' ', Validators.required);
    this.secondName = new FormControl(' ', Validators.required);
    this.phoneNumber = new FormControl(' ', [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]);
    this.email = new FormControl(' ', [Validators.required, Validators.email]);
    this.address = new FormControl(' ', Validators.required);
    this.comment = new FormControl(' ', Validators.maxLength(100));

    this.orderForm = new FormGroup({
      name: this.name,
      secondName: this.secondName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      address: this.address,
      comment: this.comment
    });
  }

  copyForm(orderFormDto: any): Order {
    let order = new Order();
    order.name = orderFormDto.name;
    order.secondName = orderFormDto.secondName;
    order.phoneNumber = orderFormDto.phoneNumber;
    order.email = orderFormDto.email;
    order.address = orderFormDto.address;
    order.comment = orderFormDto.comment;
    return order;
  }

  btCartOnClick() {
    this.onCart.emit();
  }

  processOrder() {
    this.order = this.copyForm(this.orderForm.value);

    // Confirm order: create and show confirmation dialog
    this.cartService.confirmOrder(this.cart.locator, this.order)
      .then(response => {
        if (response !== null) {
          this.order = response;
          this.order.totalUnits = 0;
          this.order.totalPrice = 0;

          for (let item of this.order.items) {
            this.order.totalUnits += item.units;
            this.order.totalPrice += item.units * item.price;
          }
          this.onOrderSummary.emit(this.order);
        }
      })
  }
}


