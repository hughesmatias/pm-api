var express = require('express');
var app = express();
var routes = require('./routes'); 

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://root:root123@ds135207.mlab.com:35207/peer-medical', (err, result) => {
  const db = result.db('peer-medical');

  app.use('/', routes(db));

  app.listen(3000, () => {
    console.log(`Running in 3000`);
  });
});
