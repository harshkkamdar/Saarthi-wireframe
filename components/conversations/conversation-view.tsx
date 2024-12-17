'use client';

import { Message } from '@/types/conversation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Music, Image } from 'lucide-react';

interface ConversationViewProps {
  messages: Message[];
  title: string;
}

export function ConversationView({ messages, title }: ConversationViewProps) {
  const renderAttachment = (metadata: Message['metadata']) => {
    if (!metadata) return null;

    return (
      <div className="mt-2 flex gap-2">
        {metadata.fileUrl && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <FileText className="h-3 w-3" />
            Document
          </div>
        )}
        {metadata.audioUrl && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Music className="h-3 w-3" />
            Audio
          </div>
        )}
        {metadata.reportUrl && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Image className="h-3 w-3" />
            Report
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-[calc(100vh-12rem)]">
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
                  <p>{message.content}</p>
                  {renderAttachment(message.metadata)}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}