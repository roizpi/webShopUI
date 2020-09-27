import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop/shop.component";
import {AdministratorComponent} from "./admin/administrator.component";
import {OrdersComponent} from "./admin/orders.component";
import {BooksComponent} from "./admin/books.component";
import {OrderDetailComponent} from "./admin/order-detail.component";

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'administrator',
    component: AdministratorComponent,
    children: [
      {path: '', redirectTo: 'books', pathMatch: 'full'},
      {path: 'books', component: BooksComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'orders/:id', component: OrderDetailComponent}
    ]},
  {path: '', redirectTo: '/shop', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
