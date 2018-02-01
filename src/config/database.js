const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(process.env.CONNECT_STRING_MONGO, {
  auth: {
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
  },
})
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));
