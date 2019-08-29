import { Component } from '@angular/core';
import { Category } from '../model/category';
import { Book } from '../model/book';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // TODO: REST API - BBDD
  CATEGORIES = [{'idCategory': 1, 'categoryName': 'Computing'},
              {'idCategory': 2, 'categoryName': 'Novel'},
              {'idCategory': 3, 'categoryName': 'Tourism'}];
  categories: Category[] = this.CATEGORIES;
  filter: Book = new Book();
  message: string = "";
  selectedCategory: Category = null;

  searchOnClick() {
    if ( this.filter.title !== '' && this.filter.title !== undefined) {
      this.message = "";
    } else {
      this.message = "Value to search"
    }
  }

  categoryOnClick(category: Category) {
    this.selectedCategory = category;
  }
}
