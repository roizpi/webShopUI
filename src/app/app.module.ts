import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
import {DetailComponent} from "./cover/detail.component";
import {CartComponent} from "./cover/cart.component";
import {CartWrapperService} from "./services/cart-wrapper.service";
import {SummaryComponent} from "./cover/summary.component";
import {CheckoutComponent} from "./cover/checkout.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CoverComponent,
    CatalogComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // To use two-way binding with ngModel
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    BookService,
    CartService,
    OrderService,
    CatalogueWrapperService,
    CartWrapperService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
