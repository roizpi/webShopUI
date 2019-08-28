import { Category } from './category';

export class Book {
  idBook: number;
  idCategory: number;
  title: string;
  isbn: string;
  description: string;
  author: string;
  category: Category;
  price: number;
  img: string;
}
