import winston from 'winston';
import chalk from 'chalk';

// Define the logger configuration
const logger = winston.createLogger({
  level: 'info', // Set the default log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      // Customize log level colors using chalk
      let levelColorized = level;
      switch (level) {
        case 'info':
          levelColorized = chalk.blue(level);
          break;
        case 'warn':
          levelColorized = chalk.yellow(level);
          break;
        case 'error':
          levelColorized = chalk.red(level);
          break;
        default:
          break;
      }

      return `${chalk.gray(timestamp)} ${levelColorized}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
  ],
});

export default logger;
