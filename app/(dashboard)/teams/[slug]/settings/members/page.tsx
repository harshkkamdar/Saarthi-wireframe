import { TeamMembersContent } from '@/components/settings/team-members-content';
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

export default function TeamMembersSettings({ params }: Props) {
  const team = teams.find(t => t.slug === params.slug);
  if (!team) return null;
  
  return <TeamMembersContent team={team} />;
} 