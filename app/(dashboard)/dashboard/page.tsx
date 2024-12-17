import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  MessageSquare,
  Music,
  FileStack,
  Search,
  ArrowRight,
} from 'lucide-react';

const apps = [
  {
    title: 'Chat Assistant',
    description: 'AI-powered chat for department-specific tasks',
    icon: MessageSquare,
    href: '/apps/chat',
  },
  {
    title: 'Audio Generator',
    description: 'Generate custom sound effects and audio',
    icon: Music,
    href: '/apps/audio',
  },
  {
    title: 'Radiology Reports',
    description: 'Automated radiology report generation',
    icon: FileStack,
    href: '/apps/radiology',
  },
  {
    title: 'RAG System',
    description: 'Advanced document search and analysis',
    icon: Search,
    href: '/apps/rag',
  },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">App Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Link href={app.href} key={app.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <app.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{app.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <Button variant="ghost" className="gap-2">
                  Open App <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}