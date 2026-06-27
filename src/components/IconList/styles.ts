import styled, { css } from 'styled-components';
import { media } from '../../styles/breakpoints';

export const IconListWrapper = styled.div<{ $centered?: boolean }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;

  svg {
    width: clamp(1.5rem, 4vw, 1.875rem);
    height: auto;
  }

  ${props => props.$centered && css`
    ${media.md} {
      justify-content: center;
    }
  `}
`;

export const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--black);
  border-radius: 0.25rem;
  font-size: clamp(0.65rem, 1.8vw, 0.75rem);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
`;
