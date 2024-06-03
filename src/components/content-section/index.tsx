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

export const ContentSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    padding: 0 160px;

    h1 {
        font-size: 150px;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--white);
        position: absolute;
        z-index: 0;
        right: 30px;
        top: 4rem;
        animation: ${slideInFromLeft} 1s ease-out forwards;
    }

    div {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 1440px;
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
`;