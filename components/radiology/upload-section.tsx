'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Image as ImageIcon } from 'lucide-react';

export function UploadSection() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <Card
      className={`p-8 border-2 border-dashed transition-colors ${
        isDragging ? 'border-primary bg-primary/5' : 'border-border'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-primary/10 rounded-full">
          <ImageIcon className="h-8 w-8 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">Upload X-ray or Scan</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop your medical image or click to browse
          </p>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Select File
          </Button>
        </div>
      </div>
    </Card>
  );
}