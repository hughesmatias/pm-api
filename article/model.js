var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  text: String,
  tags: [String],
  user: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = articleSchema;