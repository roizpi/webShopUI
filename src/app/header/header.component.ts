import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  private title: string;

  @Output()
  onHidden = new EventEmitter<boolean>();
  visible = true;

  click() {
    this.visible = !this.visible;
    this.onHidden.next(this.visible);
  }

  btnBasketOnClick() {

  }
}
