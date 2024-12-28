'use client';

import { apps } from '@/config/apps';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Team } from "@/types/user";

interface BillingContentProps {
  team: Team;
}

export function BillingContent({ team }: BillingContentProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Team Information</CardTitle>
          <CardDescription>Basic information about your team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Linked Department</Label>
            <Input value="Urdu Department" readOnly />
          </div>
        </CardContent>
      </Card>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>International Models</AlertTitle>
        <AlertDescription>
          All AI models are hosted internationally. Monthly charges will be subject to forex rates.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>App Pricing</CardTitle>
          <CardDescription>Set monthly pricing for each app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {apps.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <app.icon className="h-5 w-5" />
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span>₹</span>
                <Input
                  type="number"
                  className="w-32"
                  placeholder="Price per month"
                />
              </div>
            </div>
          ))}
          <Button className="w-full">Save Pricing</Button>
        </CardContent>
      </Card>
    </div>
  );
} 