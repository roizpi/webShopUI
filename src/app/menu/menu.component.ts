import {Component, OnInit} from '@angular/core';
import { Category } from '../model/category';
import { Book } from '../model/book';
import {CategoryService} from "../services/category.service";
import {Subject} from "rxjs";
import {CatalogueWrapperService} from "../services/catalogue-wrapper.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [CategoryService]
})
export class MenuComponent implements OnInit {

  categories: Category[];
  filter: Book = new Book();
  message: string = "";
  selectedCategory: Category = null;

  // Initializes the service instances via constructor for all components.
  constructor(private categoryService: CategoryService,
              private catalogueWrapperService: CatalogueWrapperService) {};

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoryService.getCategories().then(
      categories => this.categories = categories); // Asynchronous call-back function.
  }

  searchOnClick() {
    if ( this.filter.title !== '' && this.filter.title !== undefined) {
      this.message = "";
    } else {
      this.message = "Value to search"
    }
  }

  /** Calls the service CatalogueWrapperService to get the books by category. Publishing the message to be transferred to the cover page.
  * @param {Category} category The category that has been clicked on the front end */
  categoryOnClick(category: Category) {
    this.selectedCategory = category;
    this.filter.title = ''; // Clears the filter by title/author if existent.
    this.catalogueWrapperService.filterByCategoryToCatalogue(JSON.stringify(category))
  }
}
