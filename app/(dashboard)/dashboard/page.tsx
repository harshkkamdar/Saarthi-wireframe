'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageSquare, Music, FileStack, Search, ArrowRight } from 'lucide-react';
import { apps } from '@/config/apps';
import { AppDetails } from '@/types/apps';
import { AppDetailsSidebar } from '@/components/app-details-sidebar';

export default function Dashboard() {
  const [selectedApp, setSelectedApp] = useState<AppDetails | null>(null);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">App Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Card 
            key={app.title} 
            className="h-full hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedApp(app)}
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <app.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{app.title}</h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{app.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <AppDetailsSidebar
        app={selectedApp}
        isOpen={selectedApp !== null}
        onClose={() => setSelectedApp(null)}
      />
    </div>
  );
}