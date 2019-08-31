const express = require('express'),
  app = express(), // Server app.
  bodyParser = require('body-parser');

// Server config.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const categoryRouter = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRouter());

const port = 3000;
console.log('Server is running on: ${port}');
app.listen(port);
