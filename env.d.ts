declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    APP_PORT: string;
    APP_VERSION?: string;
    TELEGRAM_BOT_TOKEN?: string;
    TELEGRAM_CHAT_ID?: string;
    CRON_INTERVAL_MIN: string;
  }
}
