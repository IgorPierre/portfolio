import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPhp,
} from 'react-icons/si';
import { FaWordpress, FaElementor, FaDocker } from 'react-icons/fa';
import type { Project } from '../types';
import { assetUrl } from '../utils/assetUrl';

export const projects: Project[] = [
  {
    title: 'DuinoFlow',
    description:
      'Desenvolvido como trabalho de conclusão de curso em Engenharia da Computação na Universidade Federal do Ceará (UFC). O DuinoFlow é uma plataforma no-code para criação de sketches Arduino a partir de fluxos visuais. Foi um projeto ambicioso e desafiador, desenvolvido do zero, do qual tenho muito orgulho.',
    technologies: [
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiLaravel, label: 'Laravel' },
      { icon: SiPhp, label: 'PHP' },
      { icon: FaDocker, label: 'Docker' },
    ],
    image: assetUrl('images/duinoflow.png'),
    link: 'https://duinoflow.com.br/',
    imageFirst: true,
  },
  {
    title: 'Senhalivre',
    description:
      'Atuei no desenvolvimento da plataforma Senhalivre, um sistema de gestão de Wi-Fi Marketing voltado para potencializar a comunicação entre estabelecimentos e seus clientes. Nesse projeto, participei ativamente de todas as etapas — do planejamento à implementação, gestão de equipe e deploy. Essa experiência ampliou minhas habilidades técnicas e de colaboração, proporcionando uma visão completa do ciclo de desenvolvimento de software.',
    technologies: [
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiLaravel, label: 'Laravel' },
      { icon: SiPhp, label: 'PHP' },
      { icon: FaDocker, label: 'Docker' },
    ],
    image: assetUrl('images/senhalivre.png'),
    link: 'https://senhalivre.com/',
  },
  {
    title: 'LifeCenter Shop',
    description:
      'Atuei no desenvolvimento da plataforma LifeCenter Shop, um marketplace de saúde e bem-estar, onde aperfeiçoei minhas habilidades em PHP, Laravel e JavaScript. Contribuí na criação de interfaces, models e controllers, consolidando a prática da padrão MVC.',
    technologies: [
      { icon: SiJavascript, label: 'JavaScript' },
      { icon: SiLaravel, label: 'Laravel' },
      { icon: SiPhp, label: 'PHP' },
    ],
    image: assetUrl('images/lifecentershop.png'),
    link: 'https://lifecentershop.com.br/',
    imageFirst: true,
  },
  {
    title: 'Site Acaraú Valley',
    description:
      'Fruto da minha atuação na empresa Loading Jr., onde tive a oportunidade, juntamente com os outros membros da equipe, de implementar o site da startup Acaraú Valley.',
    technologies: [
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiReact, label: 'React' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    image: assetUrl('images/acarau.png'),
    link: 'https://site-acarau-valley-beta.vercel.app/',
  },
  {
    title: 'Crédigi Promotora',
    description:
      'Site institucional completo desenvolvido para a promotora de crédito Crédigi.',
    technologies: [
      { icon: FaWordpress, label: 'WordPress' },
      { icon: FaElementor, label: 'Elementor' },
    ],
    image: assetUrl('images/credigi.png'),
    link: 'http://credigipromotora.com.br/',
    imageFirst: true,
  },
  {
    title: 'LifeCenter Blog',
    description:
      'Projeto desenvolvido durante minha atuação em uma empresa de software para a LifeCenter Shop, onde pude aperfeiçoar minhas habilidades com HTML, CSS e criação de temas Wordpress.',
    technologies: [
      { icon: FaWordpress, label: 'WordPress' },
      { icon: SiHtml5, label: 'HTML5' },
      { icon: SiCss3, label: 'CSS3' },
    ],
    image: assetUrl('images/blog.png'),
    link: 'https://blog.lifecentershop.com.br/',
  },
];
