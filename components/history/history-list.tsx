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
import { HistoryEntry } from '@/types/history';
import { Search } from 'lucide-react';
import { HistoryItem } from './history-item';

interface HistoryListProps {
  entries: HistoryEntry[];
  onSelect: (entry: HistoryEntry) => void;
  selectedId?: string;
}

export function HistoryList({
  entries,
  onSelect,
  selectedId,
}: HistoryListProps) {
  const [search, setSearch] = useState('');
  const [appFilter, setAppFilter] = useState<string>('all');
  const [teamFilter, setTeamFilter] = useState<string>('all');

  const filteredEntries = entries.filter((entry) => {
    const matchesSearch = entry.title.toLowerCase().includes(search.toLowerCase());
    const matchesApp = appFilter === 'all' || entry.appId === appFilter;
    const matchesTeam = teamFilter === 'all' || entry.teamId === teamFilter;
    return matchesSearch && matchesApp && matchesTeam;
  });

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b space-y-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search history..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Select value={appFilter} onValueChange={setAppFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by app" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Apps</SelectItem>
              <SelectItem value="chat">Chat Assistant</SelectItem>
              <SelectItem value="audio">Audio Generator</SelectItem>
              <SelectItem value="radiology">Radiology Reports</SelectItem>
              <SelectItem value="rag">RAG System</SelectItem>
            </SelectContent>
          </Select>
          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="design">Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {filteredEntries.map((entry) => (
            <HistoryItem
              key={entry.id}
              entry={entry}
              isSelected={entry.id === selectedId}
              onClick={() => onSelect(entry)}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
} 