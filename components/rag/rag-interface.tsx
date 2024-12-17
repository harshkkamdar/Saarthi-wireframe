'use client';

import { FileUpload } from './file-upload';
import { SearchSection } from './search-section';
import { ResultsDisplay } from './results-display';

export function RagInterface() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 gap-4">
          <FileUpload />
          <SearchSection />
        </div>
        <ResultsDisplay />
      </div>
    </div>
  );
}