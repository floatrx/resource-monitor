import { MonitorItem } from '../types/monitor';

export const DELAY_BETWEEN_CHECKS_MS = 300;

export const ENDPOINTS_TO_CHECK: MonitorItem[] = [
  {
    label: 'Google',
    url: 'https://google.com',
  },
  {
    label: 'Test',
    url: 'https://this-website-doesnt-exist.org',
  },
];
