import { AxiosRequestConfig, Method } from 'axios';

export interface MonitorOptions {
  readonly beforeCheck?: () => void;
  readonly onCheck?: (visit: MonitorVisit) => void;
  readonly onFinish?: (report: string, hasErrors: boolean) => void;
  readonly delay: number;
  endpoints: MonitorItem[];
}

export type MonitorItem = AxiosRequestConfig & {
  label: string;
  url: string;
};

export type MonitorVisit = {
  headers: any;
  method: Method;
  label: string;
  url: string;
  timestamp: Date;
  successful: boolean;
};
