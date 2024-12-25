'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, MessageSquare, Settings } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserMenu } from './header/user-menu';
import { TeamMenu } from './header/team-menu';
import { User, Team } from '@/types/user';

// Mock data - In a real app, this would come from your auth system
const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
};

const teams: Team[] = [
  { id: '1', name: 'Engineering Team', slug: 'engineering', isAdmin: true },
  { id: '2', name: 'Marketing Team', slug: 'marketing', isAdmin: false },
  { id: '3', name: 'Design Team', slug: 'design', isAdmin: false },
  { id: '4', name: 'Product Team', slug: 'product', isAdmin: true },
];

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentTeam, setCurrentTeam] = useState(teams[0]);

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BrainCircuit className="h-6 w-6" />
          <span className="text-xl font-semibold">Saarthi</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/conversations">
            <Button
              variant="ghost"
              size="icon"
              className={pathname === '/conversations' ? 'bg-muted' : ''}
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden md:inline-flex">
              {currentUser.role}
            </Badge>
            <TeamMenu
              currentTeam={currentTeam}
              teams={teams}
              onTeamChange={setCurrentTeam}
            />
          </div>

          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <UserMenu user={currentUser} />
        </div>
      </div>
    </header>
  );
}