const express = require('express'),
  app = express(), // Server app.
  bodyParser = require('body-parser');

// Server config.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const categoryRouter = require('./routes/categoryRoutes');
const bookRouter = require('./routes/bookRoutes');
const cartRouter = require('./routes/cartRoutes');

app.use('/api/categories', categoryRouter());
app.use('/api/books', bookRouter());
app.use('/api/cart', cartRouter());

const port = 3000;
app.listen(port);
console.log('Server is running on: ${port}');
