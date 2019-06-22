var express = require('express');
var app = express();
var routes = require('./routes');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const userSchema = require('./user/model');
const articleSchema = require('./article/model');

app.use(bodyParser.json());

mongoose.connect('mongodb://root:root123@ds135207.mlab.com:35207/peer-medical', {
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(() => {
  mongoose.model('user', userSchema);
  mongoose.model('article', articleSchema);

  app.use('/', routes(mongoose));

  app.listen(3000, () => {
    console.log(`Running in 3000`);
  });
},
err => console.log(err));
