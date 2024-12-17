import { apps } from '@/config/apps';
import { ChatInterface } from '@/components/chat/chat-interface';
import { AudioInterface } from '@/components/audio/audio-interface';
import { RadiologyInterface } from '@/components/radiology/radiology-interface';
import { RagInterface } from '@/components/rag/rag-interface';

export function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }));
}

export default function AppInterfacePage({ params }: { params: { id: string } }) {
  const app = apps.find((a) => a.id === params.id);
  
  if (!app) {
    return null;
  }

  switch (app.id) {
    case 'chat':
      return <ChatInterface />;
    case 'audio':
      return <AudioInterface />;
    case 'radiology':
      return <RadiologyInterface />;
    case 'rag':
      return <RagInterface />;
    default:
      return <div>Interface not implemented</div>;
  }
}