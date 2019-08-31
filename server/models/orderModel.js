// Array to save the orders
const ORDERS = [];

// Next order id
let locatorId = 1;

// Method to obtain all orders
const getOrders = () => ORDERS;

// Method to obtain a single order from a locator
const getOrderLocator = (locator) =>
  ORDERS.find((order) => order.locator === locator);

// Method to obtain an order from ID
const getOrderId = (id) => ORDERS.find((order) => order.idOrder === id);

// Method to modify an order status
const updateOrderStatus = (locator, status) => {
  let order = getOrderLocator(locator);

  if (order)
    order.status = status;
};

// Method to delete an order
const deleteOrder = (locator) => {
  const itemIndex = ORDERS.findIndex((p) => p.locator === locator);
  if (itemsIndex > -1)
    ORDERS.splice(itemIndex, 1);
};

// Method to create an order
const createOrder = (order) => {
  order.idOrder = locatorId;
  locatorId = locatorId ++;
  ORDERS.push(order);
};

module.exports = {
  getOrders,
  getOrderLocator,
  getOrderId,
  createOrder,
  updateOrderStatus,
  deleteOrder
};
