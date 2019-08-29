import {Component, OnInit} from '@angular/core';
import { Category } from '../model/category';
import { Book } from '../model/book';
import {CategoryService} from "../services/category.service";


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

  constructor(private categoryService: CategoryService) {}

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

  categoryOnClick(category: Category) {
    this.selectedCategory = category;
  }
}
