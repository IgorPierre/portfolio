import styled from "styled-components";

export const Button = styled.a`
    border: 2px solid var(--black);
    font-weight: 600;
    color: var(--black);
    padding: 0.3rem 1rem;
    text-decoration: none;
    transition: .6s;

    &:hover{
        background-color: var(--black);
        color: var(--white);

    }
`;