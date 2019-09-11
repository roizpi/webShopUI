import { Component, Input } from '@angular/core';
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
}
