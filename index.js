const express = require('express');
const consign = require('consign');

const app = express();
app.disable('x-powered-by');

app.set('json spaces', 4);

consign({ verbose: false })
  .include('db.js')
  .then('models')
  .then('associations.js')
  .then('auth.js')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js')
  .into(app);

module.exports = app;