import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {CoverComponent} from "./cover/cover.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // To use two-way binding with ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
