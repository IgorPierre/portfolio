import type { Project } from '../../types';
import { BackgroundTitle } from '../ContentSection';
import { ProjectCard } from '../ProjectCard';
import { ProjectsSection } from './styles';

interface ProjectsAreaProps {
  projects: Project[];
}

export const ProjectsArea = ({ projects }: ProjectsAreaProps) => (
  <ProjectsSection>
    <BackgroundTitle $align="left">PROJETOS</BackgroundTitle>
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </ProjectsSection>
);
