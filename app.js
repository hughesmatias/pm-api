var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('RESTful API.');
});

app.listen(3000, () => {
  console.log(`Running in 3000`);
});
