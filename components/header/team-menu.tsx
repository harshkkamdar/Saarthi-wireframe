'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Team } from "@/types/user";
import { ChevronDown, Settings, Users, Shield, Cog } from "lucide-react";
import { useRouter } from "next/navigation";

interface TeamMenuProps {
  currentTeam: Team;
  teams: Team[];
  onTeamChange: (team: Team) => void;
}

export function TeamMenu({ currentTeam, teams, onTeamChange }: TeamMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Users className="h-4 w-4" />
          {currentTeam.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Switch Team</DropdownMenuLabel>
        {teams.map((team) => (
          <DropdownMenuGroup key={team.id}>
            <DropdownMenuItem onClick={() => onTeamChange(team)}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {team.name}
                </div>
                <div className="flex items-center gap-2">
                  {team.isAdmin && (
                    <Badge variant="secondary" className="text-xs">
                      Admin
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/teams/${team.slug}/settings`);
                    }}
                  >
                    <Cog className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ))}
        {currentTeam.isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push(`/teams/${currentTeam.slug}/settings`)}>
                <Settings className="mr-2 h-4 w-4" />
                Team Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push(`/teams/${currentTeam.slug}/members`)}>
                <Shield className="mr-2 h-4 w-4" />
                Manage Members
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}