import dotenv from 'dotenv';
import server from './src/config/server';
import './src/config/database';
import routes from './src/config/routes';

dotenv.config();
routes(server);

