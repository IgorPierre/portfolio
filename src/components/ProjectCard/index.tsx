import styled from "styled-components";

export const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 250px 0 200px 0;

    img {
        width: 500px;
        height: 230px;
        object-fit: cover;
    }


`;

export const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: flex-start !important;
    text-align: start;
    width: 50%;
    max-width: 450px !important;
    gap: 1rem !important;

    h3 {
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #5A5A5A;
    }
`;