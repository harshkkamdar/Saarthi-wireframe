'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';

export function SearchSection() {
  const [query, setQuery] = useState('');

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Search Documents</h3>
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query..."
          />
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </Card>
  );
}