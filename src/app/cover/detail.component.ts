import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() book: Book;
  @Output() onReturn = new EventEmitter();
  @Output() onAddToCart = new EventEmitter<Book>();

  returnToList() {
    this.onReturn.emit();
  }
  addToCart() {
    this.onAddToCart.emit(this.book);
  }
}
