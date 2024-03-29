import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Main Title';

  hideTitle(value: boolean) {
    console.log('Hidden: ' + value);
  }
}
