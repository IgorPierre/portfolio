import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--black);
  font-weight: 600;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--black);
  padding: 0.4rem 1.25rem;
  text-decoration: none;
  transition: 0.6s;
  white-space: nowrap;

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }

  ${media.md} {
    padding: 0.5rem 1.5rem;
  }
`;
