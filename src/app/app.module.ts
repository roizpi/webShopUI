import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {CoverComponent} from "./cover/cover.component";
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "./services/category.service";
import {BookService} from "./services/book.service";
import {CartService} from "./services/cart.service";
import {OrderService} from "./services/order.service";
import {CatalogueWrapperService} from "./services/catalogue-wrapper.service";
import {CatalogComponent} from "./cover/catalog.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CoverComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // To use two-way binding with ngModel
    HttpClientModule
  ],
  providers: [
    CategoryService,
    BookService,
    CartService,
    OrderService,
    CatalogueWrapperService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
