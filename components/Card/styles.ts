import styled from '@emotion/styled';

export const Card = styled.div<{ backgroundColor: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    border-top-right-radius: 2.5rem;
`;
