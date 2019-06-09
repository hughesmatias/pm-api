var express = require('express')
var router = express.Router();
var userRoutes = require('./users');

const configRouters = (db) => {
  router.get('/', (req, res) => {
    res.send('REST API.');
  });
  
  router.use('/users', userRoutes(db));

  return router;
}

module.exports = configRouters;
