import styled from "styled-components";

export const Banner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    h1 {
        font-family: "Vampiro One", system-ui;
        font-size: 124px;
        background: linear-gradient(to right, #33B5C6, #3A36BF);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    h2 {
        font-size: 40px;
        font-weight: normal;
    }
`;