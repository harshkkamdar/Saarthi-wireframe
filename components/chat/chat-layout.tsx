import { useState } from 'react';
import { ChatSidebar } from './chat-sidebar';
import { ChatInterface } from './chat-interface';
import { AppDetailsSidebar } from './app-details-sidebar';
import { AppDetails } from '@/types/apps';
import { Conversation } from '@/types/conversation';

interface ChatLayoutProps {
  appDetails: AppDetails;
  conversations: Conversation[];
  onNewConversation: () => void;
}

export function ChatLayout({ appDetails, conversations, onNewConversation }: ChatLayoutProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isDetailsSidebarOpen, setIsDetailsSidebarOpen] = useState(true);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSidebar
        conversations={conversations}
        selectedId={selectedConversation?.id}
        onSelect={setSelectedConversation}
        onNew={onNewConversation}
      />
      
      <div className="flex-1 flex">
        <div className={`flex-1 transition-all duration-300 ${isDetailsSidebarOpen ? 'mr-[350px]' : ''}`}>
          <ChatInterface
            conversation={selectedConversation}
            appIcon={appDetails.icon}
          />
        </div>

        <AppDetailsSidebar
          isOpen={isDetailsSidebarOpen}
          onToggle={() => setIsDetailsSidebarOpen(!isDetailsSidebarOpen)}
          appDetails={appDetails}
          selectedConversation={selectedConversation}
        />
      </div>
    </div>
  );
} 