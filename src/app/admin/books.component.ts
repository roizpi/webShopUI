import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books: Book[];
  message: String;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooksFilter('')
      .then(response => this.books = response);
  }

}
