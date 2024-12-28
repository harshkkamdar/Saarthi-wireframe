import { HistoryEntry } from '@/types/history';
import { cn } from '@/lib/utils';
import { apps } from '@/config/apps';
import { Badge } from '@/components/ui/badge';

interface HistoryItemProps {
  entry: HistoryEntry;
  isSelected: boolean;
  onClick: () => void;
}

export function HistoryItem({
  entry,
  isSelected,
  onClick,
}: HistoryItemProps) {
  const app = apps.find(a => a.id === entry.appId);
  const Icon = app?.icon;

  const statusColors = {
    completed: 'bg-green-500/10 text-green-500',
    running: 'bg-blue-500/10 text-blue-500',
    failed: 'bg-red-500/10 text-red-500',
  };

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
        {Icon && (
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium truncate">{entry.title}</p>
            <Badge variant="secondary" className={cn(statusColors[entry.status])}>
              {entry.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground truncate">
            {entry.preview}
          </p>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{entry.teamName}</span>
            <span>•</span>
            <span>{entry.appName}</span>
            <span>•</span>
            <time>{new Date(entry.timestamp).toLocaleDateString()}</time>
          </div>
        </div>
      </div>
    </button>
  );
} 