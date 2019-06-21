var express = require('express');
var router = express.Router();

const articleRouter = db => {
  var articles = db.model('article');

  router.get('/', async (req, res) => {
    const articleCollect = await articles.find().then(data => data);
    res.end(articleCollect);
  });

  return router;
}

module.exports = articleRouter;
