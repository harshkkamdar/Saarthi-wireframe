import { apps } from '@/config/apps';
import { AppFeatureList } from '@/components/app-feature-list';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }));
}

export default function AppDetailPage({ params }: { params: { id: string } }) {
  const app = apps.find((a) => a.id === params.id);
  
  if (!app) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 bg-background text-foreground">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <app.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-3xl">{app.title}</CardTitle>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <AppFeatureList features={app.features} />
          </div>
          <div className="flex justify-end">
            <Link href={`${app.href}/interface`}>
              <Button size="lg" className="gap-2">
                Launch {app.title}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}