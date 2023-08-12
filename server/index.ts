import express, { type Application } from 'express';
import path from 'path';
import { APP_PORT, NODE_ENV } from '../config';
import logger from '../shared/logger';
import routes from './routes'; // Import the 'path' module

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Set the 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Set EJS as the template engine

// Routes
app.use('/', routes); // Use the routes defined in routes.ts

// Start the server
const server = app.listen(APP_PORT, () => {
  logger.info(`Server is running on port: ${APP_PORT}`);

  // Check if app is running in development mode
  if (NODE_ENV === 'development') {
    const browserUrl = `http://localhost:${APP_PORT}`;
    logger.info(`View your app in the browser: ${browserUrl}`);
  }
});

// Optional: Handle server close gracefully
process.on('SIGINT', () => {
  server.close(() => {
    logger.info('Server has been gracefully closed.');
    process.exit(0);
  });
});
