var express = require('express');
var router = express.Router();

const userRouters = (db) => {
  var User = db.model('user');

  router.get('/', async (req, res) => {
    const usersCollection = await User.find().then(data => data);
    res.json(usersCollection);
  });

  router.get('/:id', async(req, res) => {
    const userId = req.params.id;
    User.findOne({ _id: userId }).then(user => {
      res.json(user);
    })
    .catch(err => {
      res.end("User not found");
    })
  })

  router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    const userAdded = await User.collection.insertOne(newUser, (err, result) => result | err);
    res.json(userAdded);
  });

  return router;
}

module.exports = userRouters;
