import { AppFeature } from '@/types/apps';
import { Check } from 'lucide-react';

interface AppFeatureListProps {
  features: AppFeature[];
}

export function AppFeatureList({ features }: AppFeatureListProps) {
  return (
    <div className="grid gap-4">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-4">
          <div className="mt-1 bg-primary/10 rounded-full p-1">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}