import styled, { css } from 'styled-components';
import { media } from '../../styles/breakpoints';

export const Card = styled.article<{ $imageFirst?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  z-index: 2;
  gap: clamp(1.5rem, 4vw, 3rem);

  ${media.md} {
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
  }
`;

export const ImageLink = styled.a<{ $imageFirst?: boolean }>`
  display: block;
  flex-shrink: 0;
  order: 1;
  align-self: center;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    display: block;
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  ${props => !props.$imageFirst && css`
    ${media.mdUp} {
      order: 2;
    }
  `}

  ${media.md} {
    img {
      max-width: 100%;
    }

    &:hover {
      transform: none;
    }
  }
`;

export const Info = styled.div<{ $imageFirst?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  min-width: 0;
  max-width: 460px;
  order: 2;

  h3 {
    font-size: clamp(1.125rem, 3vw, 2rem);
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    font-size: clamp(0.8rem, 2vw, 0.875rem);
    font-weight: 400;
    line-height: 1.6;
    color: #5A5A5A;
  }

  ${props => !props.$imageFirst && css`
    ${media.mdUp} {
      order: 1;
    }
  `}

  ${media.md} {
    width: 100%;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;
