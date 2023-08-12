import dotenv from 'dotenv';
import { env } from 'node:process';

dotenv.config(); // Load environment variables from .env file

export const APP_PORT = env.APP_PORT || '3000';
export const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || 'BOT';
export const NODE_ENV = env.NODE_ENV || 'production';
