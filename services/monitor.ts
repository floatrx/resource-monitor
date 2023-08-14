import axios, { Method } from 'axios';
import cron from 'node-cron';
import { CRON_INTERVAL_MIN } from '../config';
import { DELAY_BETWEEN_CHECKS_MS, ENDPOINTS_TO_CHECK } from '../config/monitors';
import { botInstance } from './bot';
import { MonitorItem, MonitorOptions, MonitorVisit } from '../types/monitor';
import logger from '../utils/logger';

export class Monitor {
  private readonly beforeCheck?: () => void;
  private readonly onCheck?: (visit: MonitorVisit) => void;
  private readonly onFinish?: (report: string, hasErrors: boolean) => void;
  private readonly delay: number;
  private readonly endpoints: MonitorItem[];

  constructor(options: MonitorOptions) {
    this.beforeCheck = options.beforeCheck;
    this.onCheck = options.beforeCheck;
    this.onFinish = options.onFinish;
    this.delay = options.delay;
    this.endpoints = options.endpoints;

    this.init();
  }

  private async wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async checkAll(options?: { onlyFailed?: boolean }) {
    let report = '\n';
    let hasFails = false;

    this.beforeCheck?.();

    // Checker
    for (const { label, url, headers = {}, method = 'HEAD' as Method } of this.endpoints) {
      await this.wait(this.delay);

      try {
        await axios.request({ method, url, headers });
        // await bot.sendMessage(chatId, `🟢 ${label}`, { disable_web_page_preview: true, disable_notification: true })
        if (!options?.onlyFailed) report += `🟢 ${label}\n`;
      } catch (error) {
        const visit: MonitorVisit = {
          url,
          label,
          headers,
          method,
          timestamp: new Date(),
          successful: false,
        };

        this.onCheck?.(visit);

        report += `🔴 ${label} · ${url || url}\n`;
        hasFails = true;
      }
    }

    this.onFinish?.(report, hasFails);
    return report;
  }

  private runCron() {
    // Run every 5 minutes
    cron.schedule(`*/${CRON_INTERVAL_MIN} * * * *`, () => {
      this.checkAll();
      console.log(`running a task every ${CRON_INTERVAL_MIN} min`);
    });
  }

  private init() {
    logger.info('[Monitor] Initialized');

    // this.runCron();
  }
}

export const monitorInstance = new Monitor({
  endpoints: ENDPOINTS_TO_CHECK,
  delay: DELAY_BETWEEN_CHECKS_MS,
  onFinish: (report, hasErrors) => {
    botInstance.sendMessage(report);
  },
});
