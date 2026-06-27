import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import type { ContactItem } from '../types';

export const contacts: ContactItem[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/IgorPierre',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/igorpierre/',
    label: 'LinkedIn',
  },
  {
    icon: HiOutlineMail,
    href: 'mailto:igor.pierre45@gmail.com',
    label: 'E-mail',
  },
];
