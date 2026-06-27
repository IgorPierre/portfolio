import type { ProjectTech } from '../../types';
import { IconListWrapper, TechBadge } from './styles';

interface IconListProps {
  items: ProjectTech[];
  centered?: boolean;
}

export const IconList = ({ items, centered }: IconListProps) => (
  <IconListWrapper $centered={centered}>
    {items.map(({ icon: Icon, label }) =>
      Icon ? (
        <Icon key={label} title={label} aria-label={label} />
      ) : (
        <TechBadge key={label} title={label}>
          {label}
        </TechBadge>
      )
    )}
  </IconListWrapper>
);
