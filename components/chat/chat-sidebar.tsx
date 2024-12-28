'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight, Plus, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Conversation } from '@/types/conversation';

interface ChatSidebarProps {
  conversations: Conversation[];
  selectedId?: string;
  onSelect: (conversation: Conversation) => void;
  onNew: () => void;
}

export function ChatSidebar({ conversations, selectedId, onSelect, onNew }: ChatSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [search, setSearch] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={cn(
        'border-r transition-all duration-300 flex flex-col',
        isCollapsed ? 'w-[50px]' : 'w-[300px]'
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && (
          <Button onClick={onNew} variant="outline" size="sm" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(!isCollapsed && "ml-2")}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {!isCollapsed && (
        <>
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => onSelect(conversation)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg transition-colors hover:bg-muted',
                    selectedId === conversation.id && 'bg-muted'
                  )}
                >
                  <div className="space-y-1">
                    <p className="font-medium truncate">{conversation.title}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.preview}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(conversation.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </>
      )}
    </div>
  );
} 