import { AppDetails } from '@/types/apps';
import { MessageSquare, Music, FileStack, Search } from 'lucide-react';

export const apps: AppDetails[] = [
  {
    id: 'chat',
    title: 'Chat Assistant',
    description: 'AI-powered chat for department-specific tasks',
    icon: MessageSquare,
    features: [
      {
        title: 'Smart Drafting',
        description: 'Automatically draft PR materials, memos, and official letters',
      },
      {
        title: 'Context Awareness',
        description: 'Maintains context throughout the conversation',
      },
      {
        title: 'Template Library',
        description: 'Access to pre-defined templates for common documents',
      },
    ],
    href: '/apps/chat',
  },
  {
    id: 'audio',
    title: 'Audio Generator',
    description: 'Generate custom sound effects and audio',
    icon: Music,
    features: [
      {
        title: 'Text-to-Sound',
        description: 'Convert text descriptions into sound effects',
      },
      {
        title: 'Multi-language Support',
        description: 'Generate audio in multiple languages',
      },
      {
        title: 'Sound Library',
        description: 'Browse and search custom sound effects',
      },
    ],
    href: '/apps/audio',
  },
  {
    id: 'radiology',
    title: 'Radiology Reports',
    description: 'Automated radiology report generation',
    icon: FileStack,
    features: [
      {
        title: 'Image Analysis',
        description: 'AI-powered analysis of X-rays and scans',
      },
      {
        title: 'Report Generation',
        description: 'Automatic generation of detailed reports',
      },
      {
        title: 'Medical Terminology',
        description: 'Accurate use of medical terms and annotations',
      },
    ],
    href: '/apps/radiology',
  },
  {
    id: 'rag',
    title: 'RAG System',
    description: 'Advanced document search and analysis',
    icon: Search,
    features: [
      {
        title: 'Multi-modal Search',
        description: 'Search through text and images',
      },
      {
        title: 'Data Processing',
        description: 'Process and analyze various file formats',
      },
      {
        title: 'Visual Analytics',
        description: 'Generate charts and visual reports',
      },
    ],
    href: '/apps/rag',
  },
];