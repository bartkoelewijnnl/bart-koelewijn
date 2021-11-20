import styled from '@emotion/styled';

export const Paragraph = styled.p<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
`;
