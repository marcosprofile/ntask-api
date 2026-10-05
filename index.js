const express = require('express');
const consign = require('consign');

const app = express();
app.disable('x-powered-by');

app.set('json spaces', 4);

consign()
  .include('models')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js')
  .into(app);