import styled, { keyframes } from 'styled-components';

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

export const Banner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    h1 {
        font-family: "Vampiro One", system-ui;
        font-size: 124px;
        background: linear-gradient(270deg, #33B5C6, #9542E8, #F998E1, #33B5C6);
        background-size: 600% 600%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: ${gradientAnimation} 20s ease infinite;
    }

    h2 {
        font-size: 36px;
        font-weight: normal;
    }
`;