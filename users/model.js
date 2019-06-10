var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  avatar: String,
});

module.exports = userSchema;
