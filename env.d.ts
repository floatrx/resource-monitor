declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    APP_PORT: string;
    TELEGRAM_BOT_TOKEN: string;
  }
}
