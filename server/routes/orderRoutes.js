const express = require('express'),
  orderRouter = express.Router(),
  Order = require('../models/orderModel');

const routes = () => {

  // API path: /api/orders
  orderRouter.route('/')
    .get((req, res) => {

      let orders = Order.getOrders();

      if (req.query.locator) {
        orders = orders.filter(p => p.locator === +req.query.locator);
      }

      res.json({data: orders});
    });

  orderRouter.route('/:idOrder')
    .get((req, res) => {
      const order = Order.getOrderId(+req.params.locator);
      if (order)
        res.json({data: order});
      else
        res.status(404).send('Order not found');
    })
    .put((req, res) => {
      const order = Order.getOrderId(+req.params.locator);
      if (order) {
        let result = Order.updateOrderStatus(order.locator, req.body.status);
        res.json({data: result});
      } else {
        res.status(404).send('Order not found');
      }
    })
    .delete((req, res) => {
      const order = Order.getOrderId(+req.params.idOrder);
      if (order) {
        Order.deleteOrder(order.locator);
        res.json({messages: [
          {code: 0, message: 'The order has been deleted: ' + req.params.idOrder}
        ]});
      } else {
        res.status(404).send('Order not found: ' + req.params.idOrder);
      }
    });

  return orderRouter;
};

module.exports = routes;
