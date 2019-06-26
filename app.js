var express = require('express');
var app = express();
var routes = require('./routes');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const userSchema = require('./user/model');
const articleSchema = require('./article/model');

const dotenv = require('dotenv');
dotenv.config();

const config =  require('./config');

const accessMiddleware = (req, res, next) => {
  // validate if request header authorization
  const authotirzationHeader = req.get('Authorization');
  if (authotirzationHeader != undefined && authotirzationHeader == config.token) {
    return next();
  } else {
    res.end('Error token');
  }
}

app.use(bodyParser.json());
app.use(accessMiddleware);

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
