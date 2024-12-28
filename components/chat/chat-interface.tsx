'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Paperclip, LucideIcon } from 'lucide-react';
import { Message, Conversation } from '@/types/conversation';

interface ChatInterfaceProps {
  conversation: Conversation | null;
  appIcon: LucideIcon;
}

export function ChatInterface({ conversation, appIcon: AppIcon }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId: conversation?.id || 'new',
      content: input,
      role: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {conversation ? (
        <>
          <div className="border-b p-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-md bg-primary/10">
                <AppIcon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold">{conversation.title}</h2>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
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
              <Button type="button" variant="ghost" size="icon" className="h-[60px]">
                <Paperclip className="h-5 w-5" />
              </Button>
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
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          Select a conversation or start a new one
        </div>
      )}
    </div>
  );
}