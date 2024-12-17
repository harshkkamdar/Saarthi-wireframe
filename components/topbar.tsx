'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BrainCircuit, Settings, LogOut, ChevronDown, MessageSquare } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BrainCircuit className="h-6 w-6" />
          <span className="text-xl font-semibold">Saarthi</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/conversations">
            <Button variant="ghost" size="icon" className={pathname === '/conversations' ? 'bg-muted' : ''}>
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Engineering Team <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Marketing Team</DropdownMenuItem>
              <DropdownMenuItem>Design Team</DropdownMenuItem>
              <DropdownMenuItem>Product Team</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/login')}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}