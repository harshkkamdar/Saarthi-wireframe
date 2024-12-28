import { Conversation, Message } from '@/types/conversation';

export const mockChatData: Record<string, {
  conversation: Conversation;
  messages: Message[];
  knowledgeBase?: {
    files: { name: string; type: string; size: string }[];
  };
  connectedTables?: {
    source: string;
    tables: { name: string; columns: string[] }[];
  }[];
}> = {
  'chat-1': {
    conversation: {
      id: 'chat-1',
      type: 'chat',
      title: 'Product Launch PR',
      timestamp: '2024-03-20T10:00:00Z',
      preview: 'Drafting press release for new product...',
      appIcon: 'chat',
    },
    messages: [
      {
        id: '1',
        conversationId: 'chat-1',
        content: 'Can you help draft a press release for our new product?',
        role: 'user',
        timestamp: '2024-03-20T10:00:00Z',
      },
      {
        id: '2',
        conversationId: 'chat-1',
        content: 'I\'ll help you draft the press release. I have access to our previous PR templates and brand guidelines.',
        role: 'assistant',
        timestamp: '2024-03-20T10:00:05Z',
      }
    ],
    knowledgeBase: {
      files: [
        { name: 'PR_Templates.pdf', type: 'pdf', size: '2.3 MB' },
        { name: 'Brand_Guidelines_2024.pdf', type: 'pdf', size: '4.1 MB' },
        { name: 'Previous_Releases.docx', type: 'document', size: '1.8 MB' }
      ]
    }
  },
  'chat-2': {
    conversation: {
      id: 'chat-2',
      type: 'chat',
      title: 'Sales Analysis',
      timestamp: '2024-03-19T15:30:00Z',
      preview: 'Analyzing Q1 sales data...',
      appIcon: 'chat',
    },
    messages: [
      {
        id: '1',
        conversationId: 'chat-2',
        content: 'Can you analyze our Q1 sales performance?',
        role: 'user',
        timestamp: '2024-03-19T15:30:00Z',
      }
    ],
    connectedTables: [
      {
        source: 'MSSQL - Sales DB',
        tables: [
          { 
            name: 'Sales',
            columns: ['date', 'product_id', 'quantity', 'revenue']
          },
          {
            name: 'Products',
            columns: ['id', 'name', 'category', 'price']
          }
        ]
      },
      {
        source: 'PostgreSQL - Analytics',
        tables: [
          {
            name: 'CustomerSegments',
            columns: ['customer_id', 'segment', 'lifetime_value']
          }
        ]
      }
    ]
  }
}; 