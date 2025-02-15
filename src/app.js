const express = require('express');

const routes = require('../src/routes');

console.log(routes);

const app = express();
routes(app);

module.exports = app;
