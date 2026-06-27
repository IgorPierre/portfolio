import type { ContactItem } from '../../types';
import { ContentItem } from '../ContentItem';
import { ContentSection } from '../ContentSection';

interface ContactSectionProps {
  items: ContactItem[];
}

export const ContactSection = ({ items }: ContactSectionProps) => (
  <ContentSection title="CONTATOS" variant="contact">
    {items.map(({ icon, href, label }) => (
      <ContentItem key={label} icon={icon} href={href} label={label} />
    ))}
  </ContentSection>
);
