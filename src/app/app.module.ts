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
import {ShopComponent} from "./shop/shop.component";
import {AppRoutingModule} from "./app-routing.module";
import {AdministratorComponent} from "./admin/administrator.component";
import {BooksComponent} from "./admin/books.component";
import {OrdersComponent} from "./admin/orders.component";
import {OrderDetailComponent} from "./admin/order-detail.component";
import {TotalCartPipe} from "./pipes/total-cart.pipe";
import {PriceItemPipe} from "./pipes/price-item.pipe";

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
    SummaryComponent,
    ShopComponent,
    AdministratorComponent,
    BooksComponent,
    OrdersComponent,
    OrderDetailComponent,
    TotalCartPipe,
    PriceItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // To use two-way binding with ngModel
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
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
