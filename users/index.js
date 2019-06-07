var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('RESTful API. GET - Users');
});

module.exports = router;
