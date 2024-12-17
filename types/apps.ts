import { LucideIcon } from 'lucide-react';

export interface AppFeature {
  title: string;
  description: string;
}

export interface AppDetails {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: AppFeature[];
  href: string;
}