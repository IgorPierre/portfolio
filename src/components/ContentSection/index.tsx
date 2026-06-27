import type { ReactNode } from 'react';
import { BackgroundTitle, Section, SectionContent } from './styles';

interface ContentSectionProps {
  title: string;
  titleAlign?: 'left' | 'right';
  variant?: 'default' | 'contact';
  children: ReactNode;
}

export const ContentSection = ({
  title,
  titleAlign = 'right',
  variant = 'default',
  children,
}: ContentSectionProps) => (
  <Section $variant={variant}>
    <SectionContent $variant={variant}>
      <BackgroundTitle $align={titleAlign}>{title}</BackgroundTitle>
      {children}
    </SectionContent>
  </Section>
);

export { BackgroundTitle } from './styles';
