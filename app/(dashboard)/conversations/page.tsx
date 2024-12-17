'use client';

import { useState } from 'react';
import { ConversationList } from '@/components/conversations/conversation-list';
import { ConversationView } from '@/components/conversations/conversation-view';
import { Conversation, Message } from '@/types/conversation';

// Mock data - In a real app, this would come from an API
const mockConversations: Conversation[] = [
  {
    id: '1',
    type: 'chat',
    title: 'PR Material Draft',
    timestamp: '2024-03-20T10:00:00Z',
    preview: 'Can you help me draft a press release...',
    appIcon: 'chat',
  },
  {
    id: '2',
    type: 'audio',
    title: 'Nature Soundscape',
    timestamp: '2024-03-19T15:30:00Z',
    preview: 'Generate peaceful forest ambience...',
    appIcon: 'audio',
  },
  {
    id: '3',
    type: 'radiology',
    title: 'Chest X-ray Analysis',
    timestamp: '2024-03-18T09:15:00Z',
    preview: 'Analysis of patient chest x-ray...',
    appIcon: 'radiology',
  },
];

const mockMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      conversationId: '1',
      content: 'Can you help me draft a press release for our new product launch?',
      role: 'user',
      timestamp: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      conversationId: '1',
      content: 'I\'d be happy to help you draft a press release. Could you provide some key details about the product?',
      role: 'assistant',
      timestamp: '2024-03-20T10:00:05Z',
    },
  ],
};

export default function ConversationsPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
        <div className="md:col-span-1">
          <ConversationList
            conversations={mockConversations}
            onSelect={setSelectedConversation}
            selectedId={selectedConversation?.id}
          />
        </div>
        <div className="md:col-span-2">
          {selectedConversation ? (
            <ConversationView
              messages={mockMessages[selectedConversation.id] || []}
              title={selectedConversation.title}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Select a conversation to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}