export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface UserSkill {
  name: string;
  level?: SkillLevel; 
}

export interface UserData {
  id: string | number;
  name: string;
  email: string;
  avatarUrl?: string;     
  isOnline: boolean;
  skills: UserSkill[];
}
