'use client';

import { FileUpload } from './file-upload';
import { SearchSection } from './search-section';
import { ResultsDisplay } from './results-display';
import { ChatHistory } from '@/components/chat/chat-history';

// Mock data
const mockHistory = [
  {
    id: '1',
    title: 'Document Analysis',
    preview: 'Analyzing quarterly reports...',
    timestamp: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Research Papers',
    preview: 'Searching through academic papers...',
    timestamp: '2024-03-19T15:30:00Z',
  },
  {
    id: '3',
    title: 'Legal Documents',
    preview: 'Contract analysis and review...',
    timestamp: '2024-03-18T09:15:00Z',
  },
];

export function RagInterface() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatHistory
        items={mockHistory}
        onSelect={() => {}}
      />
      
      <div className="flex-1 p-8">
        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-4">
            <FileUpload />
            <SearchSection />
          </div>
          <ResultsDisplay />
        </div>
      </div>
    </div>
  );
}