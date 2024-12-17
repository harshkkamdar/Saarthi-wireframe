'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ConversationItem } from './conversation-item';
import { Conversation, ConversationType } from '@/types/conversation';
import { Search } from 'lucide-react';

interface ConversationListProps {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
  selectedId?: string;
}

export function ConversationList({
  conversations,
  onSelect,
  selectedId,
}: ConversationListProps) {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<ConversationType | 'all'>('all');

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch = conv.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || conv.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b space-y-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as ConversationType | 'all')}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="chat">Chat Assistant</SelectItem>
            <SelectItem value="audio">Audio Generator</SelectItem>
            <SelectItem value="radiology">Radiology Reports</SelectItem>
            <SelectItem value="rag">RAG System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={conversation.id === selectedId}
              onClick={() => onSelect(conversation)}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}