import styled from '@emotion/styled';

export const H3 = styled.h3<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin-bottom: 0.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
`;
