import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem 1.5rem;
  text-align: center;

  ${media.md} {
    min-height: 50vh;
    padding: 2rem 1rem;
  }

  ${media.sm} {
    min-height: 45vh;
  }
`;

export const Name = styled.h1`
  font-family: "Vampiro One", system-ui;
  font-size: clamp(2.75rem, 10vw, 7.75rem);
  line-height: 1.1;
  background: linear-gradient(270deg, #33B5C6, #9542E8, #F998E1, #33B5C6);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${gradientAnimation} 20s ease infinite;
`;

export const Role = styled.h2`
  font-size: clamp(0.875rem, 2.5vw, 1.875rem);
  font-weight: normal;
  margin-top: 0.75rem;
  line-height: 1.4;
`;
