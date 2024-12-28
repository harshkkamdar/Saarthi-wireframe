import { BillingContent } from '@/components/settings/billing-content';
import { teams } from '@/config/teams';

export function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default function TeamBillingSettings({ params }: Props) {
  const team = teams.find(t => t.slug === params.slug);
  if (!team) return null;
  
  return <BillingContent team={team} />;
} 