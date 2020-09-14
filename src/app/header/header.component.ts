import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartWrapperService} from "../services/cart-wrapper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string;

  @Output()
  onHidden = new EventEmitter<boolean>();
  visible = true;

  constructor (private cartWrapperService: CartWrapperService) {}

  click() {
    this.visible = !this.visible;
    this.onHidden.next(this.visible);
  }

  btnBasketOnClick() {
    this.cartWrapperService.showCart();
  }
}
