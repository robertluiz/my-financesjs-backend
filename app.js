require('app-module-path')
  .addPath(`${__dirname}/src`);
require('dotenv')
  .config();
const server = require('config/server');
require('config/database');
require('config/routes')(server);

