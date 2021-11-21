import styled from '@emotion/styled';

export const Paragraph = styled.p<{ color: string; noMargin?: boolean }>`
    color: ${({ color }) => color};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: ${({ noMargin }) => (noMargin ? 0 : `1.5rem`)};
`;
