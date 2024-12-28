"use client"

import { ChatLayout } from '@/components/chat/chat-layout';
import { apps } from '@/config/apps';
import { mockChatData } from '@/lib/mock-data';

export default function ChatApp() {
  const chatApp = apps.find(app => app.id === 'chat')!;
  const conversations = Object.values(mockChatData).map(data => data.conversation);

  return (
    <ChatLayout
      appDetails={chatApp}
      conversations={conversations}
      onNewConversation={() => {}}
    />
  );
}