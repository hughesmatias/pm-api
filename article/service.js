module.exports = class ArticleService {
  constructor(model) {
    Object.assign(this, { model });
  }

  findAll() {
    return this.model.find().then(data => data);
  }

  save(newArticle) {
    const articleSaved = this.model(newArticle);
    return articleSaved.save((err, article) => {
      if (err) {
        throw "Article wasn't saved.";
      }
      return article;
    })
  }

  findById(articleId) {
    return this.model.find({ _id: articleId }).populate('userId').exec().then(data => data)
    .catch(() => {
      throw "Article not found.";
    });
  }

  deleteById(articleId) {
    return this.model.findByIdAndRemove(articleId, article => {
      return;
    })
    .catch(err => {
      throw "Article wasn't deleted."
    })
  }

  update(articleId, articleData) {
    return this.model.findByIdAndUpdate(articleId, articleData, (article => {
      return "Article was updated.";
    }))
    .catch(() => {
      throw "Article doesn't exist.";
    })
  }

  search(whereString) {
    return this.model.find({ userId : { $exists:true }, $where: whereString }).then(data => data);
  }

}
