import { Conversation } from '@/types/conversation';
import { cn } from '@/lib/utils';
import { MessageSquare, Music, FileStack, Search } from 'lucide-react';

interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

const iconMap = {
  chat: MessageSquare,
  audio: Music,
  radiology: FileStack,
  rag: Search,
};

export function ConversationItem({
  conversation,
  isSelected,
  onClick,
}: ConversationItemProps) {
  const Icon = iconMap[conversation.type];

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-3 rounded-lg transition-colors',
        'hover:bg-muted',
        isSelected && 'bg-muted'
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-md bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium truncate">{conversation.title}</p>
            <time className="text-xs text-muted-foreground whitespace-nowrap">
              {new Date(conversation.timestamp).toLocaleDateString()}
            </time>
          </div>
          <p className="text-sm text-muted-foreground truncate">
            {conversation.preview}
          </p>
        </div>
      </div>
    </button>
  );
}