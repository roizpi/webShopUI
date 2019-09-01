import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../model/book";
import {Reply} from "../model/reply";

@Injectable()
export class  BookService {

  private headers = new HttpHeaders().set('Content-Type','application/json');
  private booksUrl: string = '/api/books';

  constructor(private http: HttpClient) { }

  // Returns a list of books filtered by category.
  getBooksCategory(idCategory: number): Promise<Book[]> {
    let filter: Book = new Book();
    filter.idCategory = idCategory;

    // API call: /api/books/filter
    return this.http.post<Reply>(
      this.booksUrl + '/filter', JSON.stringify(filter), {headers: this.headers})
      .toPromise()
      .then(response => response.data as Book[])
      .catch(BookService.handleError);
  }

  // API call to find books by author or title.
  getBooksFilter(value: string): Promise<Book[]> {
    return this.http.get<Reply>(this.booksUrl + '/titleAuthor?value=' + value)
      .toPromise()
      .then(response => response.data as Book[])
      .catch(BookService.handleError);
  }

  // API call to get a book by id. API: /api/books/{id}
  getBook(id: number): Promise<Book> {
    return this.http.get<Reply>(this.booksUrl + '/' + id)
      .toPromise()
      .then(response => response.data as Book)
      .catch(BookService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error has been produced', error);
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
