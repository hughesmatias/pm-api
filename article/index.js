var express = require('express');
var router = express.Router();

const articleRouter = db => {
  const Article = db.model('article');
  const User = db.model('user');

  router.get('/', async (req, res) => {
    const articleCollect = await Article.find().then(data => data);
    res.json(articleCollect);
  });

  router.post('/', async (req, res) => {
    let newArticle = new Article(req.body);

    // find user by id
    const { userId } = req.body;
    if (userId) {
      User.findOne({ _id: userId }).then(user => {
        newArticle.userId = user.id;
      })
      .catch(() => {
        res.end("User not found")
      });
    }

    const articleAdd = Article.collection.insertOne(newArticle, (err, result) => result | err);
    res.json(articleAdd);
  });

  return router;
}

module.exports = articleRouter;
