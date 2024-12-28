import { apps } from '@/config/apps';

export function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }));
}

export default function AppInterfaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 