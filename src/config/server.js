import bodyParser from 'body-parser';
import express from 'express';
import logplease from 'logplease';
import queryParser from 'express-query-int';
import allowCors from './cors';


const logger = logplease.create('my-financesjs-backend');

const server = express();
const port = 3003;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());
server.listen(port, () => {
  logger.info(`Backend is running on port ${port}.`);
});

export default server;
