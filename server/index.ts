import express, { type Application } from 'express';
import path from 'path';
import { APP_PORT, NODE_ENV } from '../config';
import { botInstance } from '../services/bot';
import logger from '../utils/logger';
import routes from './routes';

// Express
const app: Application = express();

// Middleware
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure the app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('trust proxy', true);

// Routes
app.use('/', routes); // use the routes defined in routes.ts

// Start the server
const server = app.listen(APP_PORT, () => {
  logger.info(`Server is running on port: ${APP_PORT}`);

  // Check if app is running in development mode
  if (NODE_ENV === 'development') {
    const browserUrl = `http://localhost:${APP_PORT}`;
    logger.info(`View your app in the browser: ${browserUrl}`);
  }
});

// Handle server close gracefully
process.on('SIGINT', () => {
  server.close(() => {
    logger.info('Server has been gracefully closed.');
    process.exit(0);
  });
  botInstance.bot.close().then(logger.info).catch(logger.error);
});
