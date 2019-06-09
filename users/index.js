var express = require('express');
var router = express.Router();

const userRouters = (db) => {
  router.get('/', (req, res) => {
    res.send('RESTful API. GET - Users');
    // console.log(db.collection('users').find(), 'aqui campeon');
    // res.json(db.collection('users').find())
  });

  return router;
}

module.exports = userRouters;
