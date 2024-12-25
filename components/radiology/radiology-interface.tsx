'use client';

import { UploadSection } from './upload-section';
import { ReportOutput } from './report-output';
import { ChatHistory } from '@/components/chat/chat-history';

// Mock data
const mockHistory = [
  {
    id: '1',
    title: 'Chest X-ray Analysis',
    preview: 'Analysis of patient chest x-ray...',
    timestamp: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'MRI Scan Review',
    preview: 'Brain MRI scan assessment...',
    timestamp: '2024-03-19T15:30:00Z',
  },
  {
    id: '3',
    title: 'CT Scan Report',
    preview: 'Abdominal CT scan findings...',
    timestamp: '2024-03-18T09:15:00Z',
  },
];

export function RadiologyInterface() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatHistory
        items={mockHistory}
        onSelect={() => {}}
      />
      
      <div className="flex-1 p-8">
        <div className="grid gap-8">
          <UploadSection />
          <ReportOutput />
        </div>
      </div>
    </div>
  );
}