var express = require('express');
const ArticleService = require('./service');
const UserService = require('../user/service');
var router = express.Router();

const articleRouter = db => {
  const Article = new ArticleService(db.model('article'));
  const User = new UserService(db.model('user'));

  router.get('/', async (req, res) => {
    const articleCollect = await Article.findAll();
    res.json(articleCollect);
  });

  router.post('/', async (req, res) => {
    let newArticle = req.body;
    let user = null;
    // find user by id
    const { userId } = req.body;
    if (userId) {
      try {
        user = await User.findById(userId);
      } catch(err) {
        res.status(500).end("User not found");
      };
    }

    try {
      const articleAdd = await Article.save(newArticle);
      res.json(articleAdd);
    } catch(err) {
      res.status(500).end(err);
    }
  });

  router.get('/:id/user', async (req, res) => {
    try {
      const articleById = await Article.findById(req.params.id);
      res.json(articleById);
    } catch(err) {
      res.status(500).end(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await Article.deleteById(req.params.id);
      res.end("Article was deleted.");
    } catch (err) {
      res.status(500).end(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const articleId = req.params.id;
      const message = await Article.update(articleId, req.body);
      res.status(200).end(message);
    } catch (err) {
      res.status(500).end(err);
    }
  });

  router.get('/withTagsAndUser', async (req, res) => {
    // user exist and tags size > 0
    const articles = await Article.seach('this.tags.length > 0');
    if (articles.length > 0) {
      res.json(articles);
    } else {
      res.end("Doesn't have articles with user and tags.");
    }
  })

  return router;
}

module.exports = articleRouter;
