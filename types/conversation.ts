export type ConversationType = 'chat' | 'audio' | 'radiology' | 'rag';

export interface Conversation {
  id: string;
  type: ConversationType;
  title: string;
  timestamp: string;
  preview: string;
  appIcon: string;
}

export interface Message {
  id: string;
  conversationId: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  metadata?: {
    fileUrl?: string;
    audioUrl?: string;
    reportUrl?: string;
  };
}