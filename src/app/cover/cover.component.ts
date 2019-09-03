import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CatalogueWrapperService} from "../services/catalogue-wrapper.service";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  title = 'Welcome to Web-Shop';
  subscriptionFilterByCategory: Subscription;

  constructor(private cataglogueEvents: CatalogueWrapperService) {};

  /** @Override */
  ngOnInit(): void {
    this.subscriptionFilterByCategory = this.cataglogueEvents.filterByCategoryToCatalogue$.subscribe(
      item => {
        alert(item);
    })
  };
}
