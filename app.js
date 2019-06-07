var express = require('express');
var app = express();
var routes = require('./routes'); 

app.use('/', routes);

app.listen(3000, () => {
  console.log(`Running in 3000`);
});
