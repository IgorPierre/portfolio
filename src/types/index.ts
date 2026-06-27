import type { IconType } from 'react-icons';

export type { IconType };

export interface Profile {
  name: string;
  role: string;
  copyright: string;
}

export interface TechItem {
  icon: IconType;
  label: string;
}

export interface ProjectTech {
  icon?: IconType;
  label: string;
}

export interface ContactItem {
  icon: IconType;
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: ProjectTech[];
  image: string;
  link: string;
  imageFirst?: boolean;
}
