var express = require('express');
const UserService = require('./service');
var router = express.Router();

const userRouters = (db) => {
  var User = new UserService(db.model('user'));

  router.get('/', async (req, res) => {
    const usersCollection = await User.findAll();
    res.json(usersCollection);
  });

  router.get('/:id', async(req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch(err) {
      res.status(500).end(err);
    }
  })

  router.post('/', async (req, res) => {
    try {
      const newUser = await User.save(req.body);
      res.json(newUser);
    } catch(err) {
      res.status(500).end(err);
    }
  });

  return router;
}

module.exports = userRouters;
