const dotenv = require('dotenv');
dotenv.config();
const config =  require('./config');

module.exports = (req, res, next) => {
  const urlWithoutAuthorization = config.urlWithoutAuthorization.split(',');
  if (urlWithoutAuthorization.includes(req.originalUrl) || req.originalUrl == '') {
    return next();
  }
  // validate if request header authorization
  const authotirzationHeader = req.get('Authorization');
  if (authotirzationHeader != undefined && authotirzationHeader == config.token) {
    return next();
  } else {
    res.end('Error token');
  }
};
