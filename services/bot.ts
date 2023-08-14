import TelegramBot from 'node-telegram-bot-api';
import { APP_VERSION, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config';
import { BotSendMessage } from '../types/bot';
import logger from '../utils/logger';

export class Bot {
  public bot: TelegramBot;
  private readonly token: string; // only for debug
  public defaultChatId: number | undefined;

  constructor({ token, chatId }) {
    this.bot = new TelegramBot(token, { polling: true });
    this.defaultChatId = chatId || undefined;
    this.token = token;

    this.init();
  }

  /**
   * Wrapper fpr bot.sendMessage
   * Always send message without previews
   */
  sendMessage: BotSendMessage = async (message, chatId = this.defaultChatId, options) => {
    if (!chatId) return Promise.reject('Chat id is not provided');
    return await this.bot.sendMessage(chatId, message, {
      disable_web_page_preview: true,
      ...options,
    });
  };

  // OnText events
  private init() {
    this.bot.onText(/^ping$/, async (msg) => {
      logger.info('Chat ID:', msg.chat.id);
      return await this.sendMessage(`🏓 Pong! Chat id: ${msg.chat.id}`, msg.chat.id);
    });

    this.bot.onText(/app\sver/, async (msg) => {
      return await this.sendMessage(`Current app version is v${APP_VERSION}`, msg.chat.id);
    });

    logger.info('[Bot] Initialized', {
      chatId: this.defaultChatId,
      token: this.token,
    });
  }
}

export const botInstance = new Bot({
  chatId: TELEGRAM_CHAT_ID,
  token: TELEGRAM_BOT_TOKEN,
});
