import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: .5;
  }
`;

export const ContentSection = styled.section<{ $left?: boolean; $contact?: boolean; $projects?: boolean; }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${props => props.$projects ? "height: auto;" : "height: 60vh;"};
    padding: 0 160px;

    h1 {
        font-size: 130px;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Outfit", sans-serif;
        color: var(--white);
        position: absolute;
        z-index: 0;
        ${props => props.$left ? "left: 30px" : "right: 30px"};
        top: 4rem;
        animation: ${slideInFromLeft} 1s ease-out forwards;
    }

    div {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 1440px;
        ${props => props.$contact ? "justify-content: space-evenly" : ""};
        align-items: center;
        gap: 2rem;
        position: relative;
    }

    div>svg {
        width: 80px;
        height: auto;
        z-index: 1;
        border-radius: 5px;
        color: #242424;
        transition: box-shadow .4s ;
    }

    div>svg:hover {
        box-shadow: 0 8px 0 -5px #33B5C6;
    } 

    @media (max-width: 768px) {
      padding: 0;
      height: 34vh;

      h1 {
        font-size: 40px;
      }

      div {
        gap: 1rem;
        padding: 0 1.5rem;
      }

      div>svg {
        width: 20px;
      }
    }
`;