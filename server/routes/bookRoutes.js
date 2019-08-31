const express = require('express'),
  bookRouter = express.Router(),
  Book = require('../models/bookModel');

const routes = () => {
  // Method GET api/books
  bookRouter.route('/')
    .get((req, res) => {
      res.json({ data: Book.getBooks()});
    });

  // Method POST api/books/filter
  bookRouter.route('/filter')
    .post((req, res) => {
      let list = Book.getBooks();

      if (req.body.idCategory) {
        list = list.filter(book => book.idCategory === +req.body.idCategory);
      }
      res.json({ data: list });
    });

  // Method GET api/books/idBook
  bookRouter.route('/:idBook')
    .get((req, res) => {
      const book = Book.getBook(+req.params.idBook);

      if (book)
        res.json({ data: book });
      else
        res.status(404).send('Book not found');
    });

  return bookRouter;
};

module.exports = routes;
