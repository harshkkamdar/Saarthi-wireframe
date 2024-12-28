'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppDetails } from "@/types/apps";
import { ChevronLeft } from "lucide-react";
import { AddDataModal } from "./add-data-modal";
import { FileText, Database, Brain } from "lucide-react";
import { mockChatData } from "@/lib/mock-data";
import { Conversation } from "@/types/conversation";

interface AppDetailsSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  appDetails: AppDetails;
  selectedConversation: Conversation | null;
}

export function AppDetailsSidebar({ 
  isOpen, 
  onToggle, 
  appDetails,
  selectedConversation 
}: AppDetailsSidebarProps) {
  const chatData = selectedConversation 
    ? mockChatData[selectedConversation.id] 
    : null;

  return (
    <div
      className={`fixed right-0 top-16 bottom-0 bg-background border-l transition-all duration-300 ${
        isOpen ? 'w-[350px]' : 'w-0'
      }`}
    >
      {isOpen && (
        <>
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">Chat Details</h2>
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-4 space-y-6 overflow-auto h-[calc(100vh-8rem)]">
            {chatData?.knowledgeBase && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {chatData.knowledgeBase.files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4" />
                      <span className="flex-1 truncate">{file.name}</span>
                      <span className="text-xs text-muted-foreground">{file.size}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {chatData?.connectedTables && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Connected Tables</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {chatData.connectedTables.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Database className="h-4 w-4" />
                        {source.source}
                      </div>
                      <div className="pl-6 space-y-1">
                        {source.tables.map((table, tableIndex) => (
                          <div key={tableIndex} className="text-sm">
                            <span className="font-medium">{table.name}</span>
                            <span className="text-xs text-muted-foreground block">
                              Columns: {table.columns.join(', ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Model Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4" />
                  <span>
                    {chatData?.knowledgeBase 
                      ? 'Knowledge Base Enhanced' 
                      : chatData?.connectedTables 
                        ? 'Database Connected' 
                        : 'Base Model'}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Add Data</CardTitle>
              </CardHeader>
              <CardContent>
                <AddDataModal />
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-10 top-4"
          onClick={onToggle}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
} 