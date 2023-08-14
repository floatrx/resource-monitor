import TelegramBot, { SendMessageOptions } from 'node-telegram-bot-api';

export type BotEvent = (msg: TelegramBot.Message, match: RegExpExecArray | null) => Promise<TelegramBot.Message>;
export type BotSendMessage = (message: string, chatId?: number, options?: SendMessageOptions) => Promise<TelegramBot.Message>;
