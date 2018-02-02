import mongoose from 'mongoose';
import logplease from 'logplease';

const logger = logplease.create('my-financesjs-backend');
mongoose.Promise = global.Promise;
const database = mongoose.connect(process.env.CONNECT_STRING_MONGO, {
  auth: {
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
  },
})
  .then(() => logger.info('connection successful'))
  .catch(err => logger.error(err));
export default database;
