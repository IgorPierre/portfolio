import type { TechItem } from '../../types';
import { ContentItem } from '../ContentItem';
import { ContentSection } from '../ContentSection';

interface TechnologiesSectionProps {
  items: TechItem[];
}

export const TechnologiesSection = ({ items }: TechnologiesSectionProps) => (
  <ContentSection title="TECNOLOGIAS">
    {items.map(({ icon, label }) => (
      <ContentItem key={label} icon={icon} label={label} />
    ))}
  </ContentSection>
);
