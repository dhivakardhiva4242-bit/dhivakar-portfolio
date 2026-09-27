export interface PersonalInfo {
  name: string;
  role: string;
  degree: string;
  college: string;
  collegeShort: string;
  location: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  bio: string;
  status: string;
  careerInterests: string[];
}

export type SkillCategory = 'all' | 'programming' | 'web' | 'ai-ml' | 'core';

export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'ai-ml' | 'core';
  stage: 'Active Practice' | 'Core Foundation' | 'In Progress';
  iconName: string;
  description: string;
  topics: string[];
}

export interface LearningTopic {
  title: string;
  category: string;
  focusArea: string;
  status: 'In Progress' | 'Continuous';
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  status: 'In Development' | 'Planned' | 'Prototype';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  isPlaceholder: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  period: string;
  specialization: string;
  keyAreas: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  targetDate: string;
  description: string;
  topics: string[];
  isPlaceholder: boolean;
  verifyUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'College Event' | 'Tech Club';
  status: string;
  description: string;
  focus: string;
  isPlaceholder: boolean;
}
