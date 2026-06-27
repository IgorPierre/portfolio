import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si';
import { FaSass, FaLaravel, FaPhp, FaDocker, FaAws } from 'react-icons/fa';
import type { TechItem } from '../types';

export const technologies: TechItem[] = [
  { icon: SiTypescript, label: 'Typescript' },
  { icon: SiReact, label: 'React' },
  { icon: SiTailwindcss, label: 'Tailwindcss' },
  { icon: FaSass, label: 'Sass' },
  { icon: FaPhp, label: 'Php' },
  { icon: FaLaravel, label: 'Laravel' },
  { icon: FaDocker, label: 'Docker' },
  { icon: FaAws, label: 'AWS' },
];
