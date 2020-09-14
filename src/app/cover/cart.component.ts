import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../model/book';
import {ItemCart} from '../model/itemCart';
import {Cart} from '../model/cart';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart: Cart;
  @Output() onBookSelect = new EventEmitter<Book>();
  @Output() onBuy = new EventEmitter();

  constructor(private cartService: CartService) {}

  viewDetail(book: Book) {
    this.onBookSelect.emit(book);
  }

  addToCart(itemCart: ItemCart) {
    itemCart.units++;
    this.cartService.addItemCart(this.cart.locator, itemCart)
      .then(response => {
        this.cart = response;
        this.cartService.calcTotal(this.cart);
      })
  }

  removeFromCart(itemCart: ItemCart) {
    if (confirm('Do you wish to remove the book: '+itemCart.book.title+'?')) {
      itemCart.units = 0;
      this.cartService.addItemCart(this.cart.locator, itemCart)
        .then(response => {
          this.cart = response;
          this.cartService.calcTotal(this.cart);
        })
    }
  }

  btBuyOnClick() {
    this.onBuy.emit();
  }
}
