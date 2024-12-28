'use client';

import { apps } from '@/config/apps';
import { ChatLayout } from '@/components/chat/chat-layout';
import { useParams } from 'next/navigation';
import { Conversation } from '@/types/conversation';

// Mock conversations - In real app, fetch from API
const mockConversations: Conversation[] = [
  {
    id: '1',
    type: 'chat',
    title: 'Project Planning',
    timestamp: '2024-03-20T10:00:00Z',
    preview: 'Let\'s discuss the roadmap for Q2...',
    appIcon: 'chat',
  },
  // ... more conversations
];

export default function AppInterface() {
  const params = useParams();
  const app = apps.find((a) => a.id === params.id);
  
  if (!app) return null;

  return (
    <ChatLayout
      appDetails={app}
      conversations={mockConversations}
      onNewConversation={() => {}}
    />
  );
}