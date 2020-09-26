import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CatalogueWrapperService} from "../services/catalogue-wrapper.service";
import {BookService} from "../services/book.service";
import {Book} from "../model/book";
import {Category} from "../model/category";
import {CartWrapperService} from "../services/cart-wrapper.service";
import {CartService} from "../services/cart.service";
import {ItemCart} from "../model/itemCart";
import {Cart} from "../model/cart";
import {Order} from "../model/order";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  title = 'Welcome to Web-Shop';
  subscriptionFilterByCategory: Subscription;
  subscriptionFilterByTitleAuthor: Subscription;
  subscriptionViewCart: Subscription;

  // Books catalog vars.
  books: Book[] = [];
  mode: string = "";
  filterValue: string = "";
  filter: string = "";
  selectBook: Book;
  previousMode: string = "";
  cart: Cart = null;
  order: Order = new Order();

  constructor(private catalogueEvents: CatalogueWrapperService,
              private bookService: BookService,
              private cartEvents: CartWrapperService,
              private cartService: CartService) {};

  /** @Override */
  ngOnInit(): void {
    // When a category has been selected (event triggered).
    this.subscriptionFilterByCategory = this.catalogueEvents.filterByCategoryToCatalogue$.subscribe(

      item => {
        // Call the BookServiceto get the book list.
        let category: Category;
        // Parse the string item to Category object.
        category = JSON.parse(item);
        this.mode = "list";
        this.filter = "categories";
        this.filterValue = category.categoryName;
        this.bookService.getBooksCategory(category.idCategory)
          .then(list => this.books = list)
          .catch(error => {this.books = []});
      }
    );

    this.subscriptionFilterByTitleAuthor = this.catalogueEvents.filterByTitleAuthorToCatalogue$.subscribe(

      item => {
        this.mode = "list";
        this.filter = "title/author";
        this.filterValue = item;
        this.bookService.getBooksFilter(item)
          .then(list => this.books = list)
          .catch(error => this.books = [])
      }
    );

    this.subscriptionViewCart = this.cartEvents.showCart$.subscribe(
      item => {
        this.mode = "cart";

        // Check whether a cart already exists
        if (this.cart === null) {
          this.cartService.createCart()
            .then(cart => {
              this.cart = cart;
              this.cartService.calcTotal(this.cart);
            })
        } else {
          // If exists we get the content from the server
          this.cartService.getCart(this.cart.locator)
            .then(cart => {
              this.cart = cart;
              this.cartService.calcTotal(this.cart);
            })
            .catch(error => {this.cart = new Cart();})
        }
      }
    );
  }

  onSelectBook(book: Book) {
    this.previousMode = this.mode;
    this.mode = 'detail';
    this.selectBook = book;
  }

  onAddToCart(book: Book) {
    // Activate the view to show the cart
    this.mode = "cart";

    // Check whether a cart already exists
    if (this.cart === null) {
      this.cartService.createCart()
        .then(cart => {
          this.cart = cart;
          this.cart.totalPrice = 0;
          this.cart.totalUnits = 0;
          this.addToCart(book);
        });
    } else {
      this.addToCart(book);
    }
  }

  returnToList() {
    this.mode = this.previousMode;
  }

  private addToCart(book: Book) {
    let item: ItemCart = null;

    if (this.cart != null && this.cart.items !== null) {
      item = this.cart.items.find(
        item => item.book.idBook === book.idBook);
    }
    if (item === null || !item) {
      item = new ItemCart();
      item.book = book;
      item.units = 1;
    } else {
      item.units++;
    }

    // Sync with the server data
    this.cartService.addItemCart(this.cart.locator, item).then(
      response => {
        this.cart = response;
        this.cartService.calcTotal(this.cart);
      }
    );
  }

  // Changes the value of mode to show the new view
  onBuy() {
    this.mode = "checkout";
  }

  returnToCart() {
    this.cartService.getCart(this.cart.locator)
      .then(response => {
        this.cart = response;
        this.cartService.calcTotal(this.cart);
        this.mode = 'cart';
      })
  }

  onOrderSummary(order: Order) {
    this.cart = null;
    this.order = order;
    this.mode = 'summary';
  }

}
