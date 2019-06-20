var express = require('express')
var router = express.Router();
var userRoutes = require('./user');

const configRouters = (db) => {
  router.get('/', (req, res) => {
    res.send('REST API.');
  });
  
  router.use('/user', userRoutes(db));

  return router;
}

module.exports = configRouters;
