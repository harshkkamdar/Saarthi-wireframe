export type RunStatus = 'completed' | 'running' | 'failed';

export interface HistoryEntry {
  id: string;
  appId: string;
  appName: string;
  teamId: string;
  teamName: string;
  title: string;
  timestamp: string;
  status: RunStatus;
  preview: string;
} 