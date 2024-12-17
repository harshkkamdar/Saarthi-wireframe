'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Upload } from 'lucide-react';

export function FileUpload() {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">Upload Documents</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Support for PDFs, images, and text files
          </p>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Choose Files
          </Button>
        </div>
      </div>
    </Card>
  );
}