import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--light-purple);
    color: var(--white);
    padding: 1rem 3rem;
    border: none;
    border-radius: .5rem;
    font-size: 18px;
    font-weight: 600;
    transition: background-color .6s;
    cursor: pointer;

    &:hover {
        background-color: var(--purple);
    }
`;