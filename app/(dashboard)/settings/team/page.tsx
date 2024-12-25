'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TeamMemberList } from "@/components/settings/team-member-list";
import { InviteTeamDialog } from "@/components/settings/invite-team-dialog";

export default function TeamSettings() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Team Details</CardTitle>
          <CardDescription>Manage your team information and settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name</Label>
            <Input id="teamName" defaultValue="Engineering Team" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamSlug">Team URL</Label>
            <div className="flex gap-2 items-center">
              <span className="text-muted-foreground">saarthi.com/team/</span>
              <Input id="teamSlug" defaultValue="engineering" className="max-w-[200px]" />
            </div>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage your team members and their roles</CardDescription>
          </div>
          <InviteTeamDialog />
        </CardHeader>
        <CardContent>
          <TeamMemberList />
        </CardContent>
      </Card>
    </div>
  );
}