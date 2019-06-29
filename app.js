var express = require('express');
var app = express();
var routes = require('./routes');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const userSchema = require('./user/model');
const articleSchema = require('./article/model');
const accessMiddleware = require('./middleware');

app.use(bodyParser.json());
app.use(accessMiddleware);

const mongoDbUrl = process.env.LOCAL_MONGO ? process.env.LOCAL_MONGO : process.env.EXT_MONGO;

mongoose.connect(mongoDbUrl, {
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
