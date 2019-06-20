var express = require('express');
var router = express.Router();
const userModel = require('./model');

const userRouters = (db) => {
  var users = db.model('users', userModel);

  router.get('/', async (req, res) => {
    const usersCollection = await users.find().then(data => data);
    res.json(usersCollection);
  });

  router.post('/', async (req, res) => {
    const userAdded = await users.insertOne(req.body, (err, result) => result | err);
    res.json(userAdded);
  });

  return router;
}

module.exports = userRouters;
