import type { UserData } from '../types';

export const users: UserData[] = [
  {
    id: 'user1',
    name: 'Alice Wonderland',
    email: 'alice.w@example.com',
    avatarUrl: 'https://i.pravatar.cc/100?img=5',
    isOnline: true,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'CSS', level: 'Advanced' },
    ],
  },
  {
    id: 'user2',
    name: 'Bob The Builder',
    email: 'bob.b@example.com',
    avatarUrl: 'https://i.pravatar.cc/100?img=12',
    isOnline: false,
    skills: [
      { name: 'Project Management', level: 'Advanced' },
      { name: 'Construction', level: 'Beginner' },
    ],
  },
  {
    id: 'user3',
    name: 'Charlie Chaplin',
    email: 'charlie.c@example.com',
    avatarUrl: 'https://i.pravatar.cc/100?img=66',
    isOnline: true,
    skills: [
      { name: 'Vue.js' },
      { name: 'Node.js', level: 'Intermediate' },
    ],
  },
];
