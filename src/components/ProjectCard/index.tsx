import type { Project } from '../../types';
import { Button } from '../Button';
import { IconList } from '../IconList';
import { Card, ImageLink, Info } from './styles';

interface ProjectCardProps extends Project {
  buttonLabel?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  link,
  imageFirst,
  buttonLabel = 'Visualizar',
}: ProjectCardProps) => (
  <Card $imageFirst={imageFirst}>
    <ImageLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir projeto ${title} em nova aba`}
      $imageFirst={imageFirst}
    >
      <img src={image} alt={`Imagem do projeto ${title}`} />
    </ImageLink>
    <Info $imageFirst={imageFirst}>
      <h3>{title}</h3>
      <p>{description}</p>
      <IconList items={technologies} centered />
      <Button href={link}>{buttonLabel}</Button>
    </Info>
  </Card>
);
