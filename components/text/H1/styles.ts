import styled from '@emotion/styled';

export const H1 = styled.h1<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
`;
