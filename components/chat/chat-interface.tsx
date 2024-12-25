'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';
import { ChatHistory } from './chat-history';

// Mock data
const mockHistory = [
  {
    id: '1',
    title: 'Project Planning',
    preview: 'Let\'s discuss the roadmap for Q2...',
    timestamp: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Bug Analysis',
    preview: 'Can you help me debug this issue...',
    timestamp: '2024-03-19T15:30:00Z',
  },
  {
    id: '3',
    title: 'Feature Discussion',
    preview: 'What do you think about adding...',
    timestamp: '2024-03-18T09:15:00Z',
  },
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatHistory
        items={mockHistory}
        onSelect={setSelectedChat}
        selectedId={selectedChat}
      />
      
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[60px]"
            />
            <Button type="submit" size="icon" className="h-[60px] w-[60px]">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}