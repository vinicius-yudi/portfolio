export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl: string[];
  demoUrl?: string;
  figmaUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}