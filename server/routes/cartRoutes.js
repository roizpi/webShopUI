const express = require('express'),
  cartRouter = express.Router(),
  Cart = require('../models/cartModel'),
  Book = require('../models/bookModel'),
  Order = require('../models/');

const routes = () => {

  // Method to create a new cart: POST /api/cart
  cartRouter.route('/')
    .post((req, res) => {
      const cart = Cart.createCart();
      res.json({ data: cart});
    });

  // Method to modify the item of a cart: POST /api/cart/{locator}/items
  // Params are received over the body request.
  cartRouter.route('/:locator/items')
    .post((req, res) => {
      const locator = +req.params.locator;
      const units = +req.body.units;

      // Test whether the book exists
      const book = Book.getBook(+req.body.book.idBook);

      if (book) {
        // Modifies the cart
        const cart = Cart.modifyCart(locator, book, units);

        if (cart)
          res.json({ data: cart});
        else
          res.status(404).send('Cart not found');
      } else {
        res.status(404).send('Book not found');
      }
    });

  // Method to create an order from a shopping cart. POST /api/cart/{locator}/order
  cartRouter.route('/:locator/order')
    .post((req, res) => {
      const cart = Cart.getCart(+req.params.locator);

      if (cart) {
        let order = {
          idOrder: +req.body.locator,
          locator: +req.params.locator,
          date: new Date(),
          name: req.body.name,
          secondName: req.body.phoneNumber,
          email: req.body.email,
          address: req.body.address,
          comment: req.body.comment,
          status: 'CREATED',
          totalUnits: 0,
          totalPrice: 0,
          items: []
        };

        for (var i=0 ; i<cart.items.length ; i++) {
          const item = cart.items[i];
          const bookItem = Book.getBook(item.book.idBook);
          order.items.push({
            id: 0,
            idOrder: +req.params.locator,
            idBook: item.book.idBook,
            title: bookItem.title,
            price: item.book.price,
            units: item.units
          });
        }

        let result = Order.createOrder(order);

        res.json({data: result});

      } else {
        res.status(404).send('Shopping Cart not found');
      }
    });

  // Method to obtain cart data from a locator
  cartRouter.route('/:locator')
    .get((req, res) => {
      const cart = Cart.getCart(+req.params.locator);

      if (cart)
        res.json({data: cart});
      else
        res.status(404).send('Cart not found');
    });

  return cartRouter;
};

module.exports = routes;
