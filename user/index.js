var express = require('express');
var router = express.Router();

const userRouters = (db) => {
  var users = db.model('user');

  router.get('/', async (req, res) => {
    const usersCollection = await users.find().then(data => data);
    res.json(usersCollection);
  });

  router.post('/', async (req, res) => {
    const newUser = new users(req.body);
    const userAdded = await users.collection.insertOne(newUser, (err, result) => result | err);
    res.json(userAdded);
  });

  return router;
}

module.exports = userRouters;
