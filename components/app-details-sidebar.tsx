'use client';

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AppFeatureList } from "@/components/app-feature-list";
import { AppDetails } from "@/types/apps";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface AppDetailsSidebarProps {
  app: AppDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AppDetailsSidebar({ app, isOpen, onClose }: AppDetailsSidebarProps) {
  const router = useRouter();

  if (!app) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <app.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{app.title}</h2>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <AppFeatureList features={app.features} />
          </div>

          <div className="flex justify-end">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => {
                router.push(`${app.href}/interface`);
                onClose();
              }}
            >
              Launch {app.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}