'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Music, Play } from 'lucide-react';
import { ChatHistory } from '@/components/chat/chat-history';

// Mock data
const mockHistory = [
  {
    id: '1',
    title: 'Nature Sounds',
    preview: 'Generated peaceful forest ambience...',
    timestamp: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Urban Atmosphere',
    preview: 'City background noise with traffic...',
    timestamp: '2024-03-19T15:30:00Z',
  },
  {
    id: '3',
    title: 'Rain Effects',
    preview: 'Light rain on window with thunder...',
    timestamp: '2024-03-18T09:15:00Z',
  },
];

export function AudioInterface() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatHistory
        items={mockHistory}
        onSelect={() => {}}
      />
      
      <div className="flex-1 p-8">
        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Generate Sound Effect</h2>
            <div className="space-y-4">
              <Textarea
                placeholder="Describe the sound effect you want to generate..."
                className="min-h-[100px]"
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">Generate Audio</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sound Library</h2>
            <div className="space-y-4">
              <Input type="search" placeholder="Search sound effects..." />
              <div className="grid gap-2">
                {['Nature Ambience', 'Footsteps', 'Door Creak'].map((sound) => (
                  <div
                    key={sound}
                    className="flex items-center justify-between p-2 bg-muted rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>{sound}</span>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}