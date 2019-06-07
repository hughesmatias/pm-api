var express = require('express')
var router = express.Router();
var userRoutes = require('./users');

router.get('/', (req, res) => {
  res.send('REST API. Init');
});

router.use('/users', userRoutes);

module.exports = router;
