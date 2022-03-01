import styled from '@emotion/styled';

export const H1 = styled.h2<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 3.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    text-align: center;
`;
