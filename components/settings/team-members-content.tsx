'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamInviteDialog } from "@/components/settings/team-invite-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Shield, User } from "lucide-react";
import { Team } from "@/types/user";

interface TeamMembersContentProps {
  team: Team;
}

const members = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    gid: 'GID001',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    gid: 'GID002',
    role: 'Member',
  },
];

export function TeamMembersContent({ team }: TeamMembersContentProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their roles</CardDescription>
        </div>
        <TeamInviteDialog />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{member.name}</p>
                    <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>
                      {member.role === 'Admin' ? <Shield className="h-3 w-3 mr-1" /> : <User className="h-3 w-3 mr-1" />}
                      {member.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">GID: {member.gid}</p>
                  {member.email && (
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  )}
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    {member.role === 'Admin' ? 'Remove Admin' : 'Make Admin'}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Remove from Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 