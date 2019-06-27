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

    const articleAdd = Article.collection.insertOne(newArticle, (err, result) => {
      if (err) res.status(500).end(err);
      return result;
    });
    res.json(articleAdd);
  });

  router.get('/:id/user', async (req, res) => {
    const articleById = await Article.find({ _id: req.params.id }).populate('userId').then(data => data);
    res.json(articleById);
  });

  router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, article => {
      res.status(200).end("Article was deleted.");
    });
  });

  router.put('/:id', (req, res) => {
    const articleId = req.params.id;
    Article.findByIdAndUpdate(articleId, req.body, (article => {
      res.status(200).end("Article was updated.");
    }));
  });

  router.get('/withTagsAndUser', async (req, res) => {
    // user exist and tags size > 0
    const articles = await Article.find({ userId : { $exists:true }, $where: 'this.tags.length > 0' }).then(data => data);
    res.json(articles);
  })

  return router;
}

module.exports = articleRouter;
