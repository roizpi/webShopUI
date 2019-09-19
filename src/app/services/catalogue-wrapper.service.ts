import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

// Allows communication among components with no parent<-->child relationship.
@Injectable()
export class CatalogueWrapperService {

  // Event emitter (publisher).
  private filterByCategoryToCatalogueSource = new Subject<string>();

  filterByCategoryToCatalogue$ = this.filterByCategoryToCatalogueSource.asObservable();

  // Event emitter
  private filterByTitleAuthorToCatalogueSource = new Subject<string>();

  filterByTitleAuthorToCatalogue$ = this.filterByTitleAuthorToCatalogueSource.asObservable();

  filterByTitleAuthorToCatalogue(item: any) {
    // Publishes an event to all the observables registered to the event.
    this.filterByTitleAuthorToCatalogueSource.next(item);
  }
  filterByCategoryToCatalogue(item: any) {
    // Publishes an event to all the observables registered to the event.
    this.filterByCategoryToCatalogueSource.next(item);
  }
}
