import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() book: Book;
  @Output() onReturn = new EventEmitter();
  @Output() onAddCart = new EventEmitter();

  returnToList() {
    this.onReturn.emit();
  }
  addToCart(book: Book) {
    this.book = book;
    this.onAddCart.emit(book);
  }
}
