import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CatalogueWrapperService} from "../services/catalogue-wrapper.service";
import {BookService} from "../services/book.service";
import {Book} from "../model/book";
import {Category} from "../model/category";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  title = 'Welcome to Web-Shop';
  subscriptionFilterByCategory: Subscription;

  // Books catalog vars.
  books: Book[] = [];
  mode: string = "";
  filterValue: string = "";
  filter: string = "";

  constructor(private catalogueEvents: CatalogueWrapperService,
              private bookService: BookService) {};

  /** @Override */
  ngOnInit(): void {
    // When a category has been selected (event triggered).
    this.subscriptionFilterByCategory = this.catalogueEvents.filterByCategoryToCatalogue$.subscribe(

      item => {
        // Call the BookServiceto get the book list.
        let category: Category;
        // Parse the string item to Category object.
        category = JSON.parse(item);
        this.mode = "list";
        this.filter = "categories";
        this.filterValue = category.categoryName;
        this.bookService.getBooksCategory(category.idCategory)
          .then(list => this.books = list)
          .catch(error => {this.books = []});
    })
  };
}
