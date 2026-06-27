import styled, { keyframes, css } from 'styled-components';
import { media } from '../../styles/breakpoints';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: .6;
  }
`;

export const Section = styled.section<{ $variant?: 'default' | 'contact' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  padding: 4rem 1.5rem;

  ${media.lg} {
    min-height: auto;
    padding: 3rem 1.25rem;
  }

  ${media.md} {
    padding: 2.5rem 1rem;
  }

  ${media.sm} {
    padding: 2rem 0.75rem;
  }
`;

export const SectionContent = styled.div<{ $variant?: 'default' | 'contact' }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem 2rem;
  position: relative;
  padding-top: 5rem;

  ${props => props.$variant === 'contact' && css`
    gap: 2rem 3rem;
    padding-top: 5rem;
  `}

  ${media.lg} {
    gap: 1.25rem 1.5rem;
    padding-top: 4rem;
  }

  ${media.md} {
    gap: 1rem 1.25rem;
    padding-top: 3.5rem;
  }

  ${media.sm} {
    gap: 0.75rem 1rem;
    padding-top: 3rem;
  }
`;

export const BackgroundTitle = styled.h2<{ $align?: 'left' | 'right' }>`
  font-size: clamp(2.5rem, 12vw, 8.125rem);
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Outfit", sans-serif;
  color: var(--white);
  position: absolute;
  z-index: 0;
  ${props => props.$align === 'left' ? 'left: 1.5rem' : 'right: 1.5rem'};
  top: 0;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  animation: ${slideInFromLeft} 1s ease-out forwards;

  ${media.lg} {
    ${props => props.$align === 'left' ? 'left: 1rem' : 'right: 1rem'};
  }

  ${media.md} {
    font-size: clamp(2rem, 10vw, 3rem);
    ${props => props.$align === 'left' ? 'left: 0.75rem' : 'right: 0.75rem'};
  }

  ${media.sm} {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
  }
`;
