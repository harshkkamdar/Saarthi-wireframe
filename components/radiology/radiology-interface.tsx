'use client';

import { UploadSection } from './upload-section';
import { ReportOutput } from './report-output';

export function RadiologyInterface() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <UploadSection />
        <ReportOutput />
      </div>
    </div>
  );
}