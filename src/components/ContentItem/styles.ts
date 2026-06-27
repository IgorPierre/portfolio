import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const Item = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.75rem, 2vw, 1rem);
  min-width: 4.5rem;

  &:hover {
    box-shadow: 0 8px 0 -5px #33B5C6;
  }

  svg {
    width: clamp(2rem, 5vw, 3.75rem);
    height: auto;
    border-radius: 5px;
    color: #242424;
    transition: box-shadow 0.4s;
  }

  a {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
  }

  a svg {
    width: clamp(2.5rem, 6vw, 3.75rem);
  }

  ${media.md} {
    min-width: 3.5rem;
  }
`;
