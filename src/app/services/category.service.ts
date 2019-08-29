import { Injectable } from "@angular/core";

import {Category} from "../model/category";
import {CATEGORIES} from "./mock-categories";

@Injectable()
export class CategoryService {
  getCategories(): Category[] {
    return CATEGORIES;
  }
}
