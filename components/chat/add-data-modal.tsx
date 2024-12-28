'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileUpload } from '@/components/ui/file-upload';
import { Database, FileText, Plus } from 'lucide-react';

export function AddDataModal() {
  const [activeTab, setActiveTab] = useState('files');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Knowledge
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Data Source</DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="files">
              <FileText className="h-4 w-4 mr-2" />
              Files
            </TabsTrigger>
            <TabsTrigger value="tables">
              <Database className="h-4 w-4 mr-2" />
              Tables
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="files" className="space-y-4">
            <FileUpload 
              onUpload={(files) => console.log('Uploaded:', files)}
              accept=".pdf,.doc,.docx,.txt"
              multiple
            />
          </TabsContent>
          
          <TabsContent value="tables" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Database Type</Label>
                <select className="w-full p-2 border rounded-md">
                  <option value="mssql">Microsoft SQL Server</option>
                  <option value="postgres">PostgreSQL</option>
                  <option value="mysql">MySQL</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Connection String</Label>
                <Input type="text" placeholder="Enter connection string..." />
              </div>
              
              <Button className="w-full">
                Connect Database
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 