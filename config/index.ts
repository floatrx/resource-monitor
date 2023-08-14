import dotenv from 'dotenv';
import { env } from 'node:process';

dotenv.config(); // Load environment variables from .env file
export const NODE_ENV = env.NODE_ENV || 'production';
export const APP_PORT = env.APP_PORT || '3000';
export const APP_VERSION = env.npm_package_version;
export const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
export const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID;
export const CRON_INTERVAL_MIN = env.CRON_INTERVAL_MINUTES;
