export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'member';
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  isAdmin: boolean;
}