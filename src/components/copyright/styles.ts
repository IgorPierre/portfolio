import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const Footer = styled.footer`
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;

  small {
    font-size: clamp(0.65rem, 2vw, 0.7rem);
    text-align: center;
  }

  ${media.sm} {
    padding: 0.6rem 0.75rem;
  }
`;
