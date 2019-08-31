const express = require('express'),
  categoryRouter = express.Router(),
  Category = require('../models/categoryModel');

const routes = () => {
  // Define endpoint for the path /
  categoryRouter.route('/')
    .get((req, res) => { // For HTTP GET method
      res.json(Category.getCategories());
    });

  return categoryRouter;
};

module.exports = routes;
