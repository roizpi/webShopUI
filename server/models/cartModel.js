// To store all the shopping carts
const CARTS = [];

// Locator
let locatorId = 1;

// Method to search a shopping cart by locator
const getCart = (locator) => CARTS.find((cart) => cart.locator === locator);

// Method to create a new shopping cart
const createCart = () => {
  let cart = {
    locator: locatorId,
    status: 'CREATED',
    items: [],
    date: '',
    totalUnits: 0,
    totalPrice: 0
  };

  CARTS.push(cart);

  locatorId = locatorId + 1;

  return cart;
};

// Method to modify a cart
const modifyCart = (locator, book, units) => {
  const cart = getCart(locator);

  if (cart) {
    let item = cart.items.find(item => item.book.idBook === book.idBook);
    if (units > 0) {
      if (item) {
        item.units = units;
      } else {
        item = {
          units: units, book: book};
        cart.items.push(item);
      }
    } else {
      if (item) {
        const itemIndex = cart.items.findIndex((c) => c.book.idBook === book.idBook);
        if (itemIndex > -1)
          cart.items.splice(itemIndex, 1);
      }
    }
  }

  return cart;
};


module.exports = {
  getCart,
  createCart,
  modifyCart
};
