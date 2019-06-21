var express = require('express')
var router = express.Router();
var userRoutes = require('./user');
var articleRoutes = require('./article');

const configRouters = (db) => {
  router.get('/', (req, res) => {
    res.send('REST API.');
  });

  router.use('/user', userRoutes(db));
  router.use('/article', articleRoutes(db));

  return router;
}

module.exports = configRouters;
