import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {Category} from "../model/category";
import {Reply} from "../model/reply";

@Injectable()
export class CategoryService {

  // REST API endpoint.
  private categoriesUrl: string = '/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Promise<Category[]> {

    return this.http.get<Reply>(this.categoriesUrl).toPromise().then(
      response => response.data as Category[]
    ).catch(CategoryService.handleError);
  }


  private static handleError(error: any):Promise<any> {
    console.error("An error has been produced", error);
    return Promise.reject(error.message || error);
  }
}
