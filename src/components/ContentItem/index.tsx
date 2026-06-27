import type { IconType } from '../../types';
import { Item } from './styles';

interface ContentItemProps {
  icon: IconType;
  label?: string;
  href?: string;
}

export const ContentItem = ({ icon: Icon, label, href }: ContentItemProps) => (
  <Item>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon />
      </a>
    ) : (
      <>
        <Icon aria-hidden />
        {label && <span>{label}</span>}
      </>
    )}
  </Item>
);
