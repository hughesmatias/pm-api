var express = require('express');
var app = express();
var routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root123@ds135207.mlab.com:35207/peer-medical', {
  useNewUrlParser: true,
}).then(() => {
  app.use('/', routes(mongoose));

  app.listen(3000, () => {
    console.log(`Running in 3000`);
  });
},
err => console.log(err));
