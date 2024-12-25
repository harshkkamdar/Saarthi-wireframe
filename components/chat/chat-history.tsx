'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatHistoryProps {
  items: {
    id: string;
    title: string;
    preview: string;
    timestamp: string;
  }[];
  onSelect: (id: string) => void;
  selectedId?: string;
}

export function ChatHistory({ items, onSelect, selectedId }: ChatHistoryProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'border-r transition-all duration-300 flex flex-col',
        isCollapsed ? 'w-[50px]' : 'w-[300px]'
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && <h2 className="font-semibold">Chat History</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {!isCollapsed && (
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  'w-full text-left p-3 rounded-lg transition-colors hover:bg-muted',
                  selectedId === item.id && 'bg-muted'
                )}
              >
                <div className="space-y-1">
                  <p className="font-medium truncate">{item.title}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.preview}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(item.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}