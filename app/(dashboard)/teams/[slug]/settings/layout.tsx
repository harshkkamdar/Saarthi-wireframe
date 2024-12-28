'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

export default function TeamSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const tab = pathname.split('/').pop();
  
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Team Settings</h1>
        <p className="text-muted-foreground">Manage your team members and billing preferences</p>
      </div>
      
      <Tabs value={tab} onValueChange={(value) => router.push(`./${value}`)}>
        <TabsList className="grid w-full md:w-auto grid-cols-2 gap-4">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
      </Tabs>

      {children}
    </div>
  );
} 