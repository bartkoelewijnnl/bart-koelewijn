import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { rgba } from 'polished';

export const Wrapper = styled('div', {
    shouldForwardProp: (prop) => typeof prop === 'string' && isPropValid(prop) && prop !== 'height' && prop !== 'width'
})<{
    height: number;
    width?: number;
    columnStart?: number;
    rowStart?: number;
}>`
    padding: 0.5rem 0;
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: span ${({ height }) => height};
    grid-column-start: ${({ columnStart }) => columnStart};
    grid-column-end: span ${({ width }) => width ?? 1};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    padding: 1rem;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

export const Company = styled.span`
    color: ${({ theme }) => rgba(theme.colors.white, 0.75)};
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    font-style: italic;
`;
