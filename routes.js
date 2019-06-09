var express = require('express')
var router = express.Router();
var userRoutes = require('./users');

const configRouters = (db) => {
  router.get('/', (req, res) => {
    console.log(db.collection('users').find(), 'aqui campeon');
    // res.send('REST API. Init');
    res.json(db.collection('users').find())
  });
  
  router.use('/users', userRoutes);

  return router;
}

module.exports = configRouters;
