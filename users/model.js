var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  avatar: String,
});

export default mongoose.model('User', userSchema);
