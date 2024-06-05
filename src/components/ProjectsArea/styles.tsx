import styled from "styled-components";

export const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 60vh;
    position: relative;
    padding: 200px 0;
    gap: 4rem;
`;

export const ProjectCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 1024px;
    z-index: 2;
    gap: 2rem;

    img {
        width: 500px;
        height: 230px;
        object-fit: cover;
        border-radius: .5rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    h3 {
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        font-size: .8rem;
        font-weight: 400;
        color: #5A5A5A;
    }
`;

export const ProjectTecnologies = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    svg {
        width: 30px;
        height: auto;
    }
`;