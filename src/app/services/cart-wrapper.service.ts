import {Injectable} from "@angular/core";
import {Subject} from "rxjs";


@Injectable()
export class CartWrapperService {
  private showCartSource = new Subject<string>();

  showCart$ = this.showCartSource.asObservable();

  showCart() {
    this.showCartSource.next();
  }

}
