const BOOKS = [
  {
    idBook: 1,
    idCategory: 1,
    title: 'Python para Pentesters',
    isbn: '0000-1111-2222',
    description: 'Hacking techniques for networks',
    author: 'Daniel Echeverri',
    category: {
      idCategory: 1,
      categoryName: 'Computing'
    },
    price: 21,
    img: '../../src/assets/...'
  },
  {
    idBook: 2,
    idCategory: 2,
    title: 'Desarrollo de Aplicaciones Web Seguras',
    isbn: '0000-2222-3333',
    description: 'Webapp development & Web security',
    author: 'Carlos Ruíz',
    category: {
      idCategory: 2,
      categoryName: 'Computing'
    },
    price: 21,
    img: '../../src/assets/...'
  }
];


// Method to obtain the list of books
const getBooks = () => BOOKS;

// Method to obtain a book with a given ID
const getBook = (idBook) => BOOKS.find((book) => book.idBook === idBook);

// Method to obtain a list of books with a name and author filters.
const getBookByTitleAuthor = (value) =>
  BOOK.filter((book) => book.title.indexOf(value) >= 0 || book.author.indexOf(value) >= 0);

// Returns an object with all the defined methods.
module.exports = {
  getBooks,
  getBook,
  getBookByTitleAuthor
};
