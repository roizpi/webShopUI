import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
   @Input() books: Book[];
   @Input() filter: string;
   @Input() filterValue: string;
   @Output() selectBook = new EventEmitter<Book>();

   btDetailOnClick(book: Book) {
     this.selectBook.emit(book);
   }
}
