import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dots = styled.div<{ isSmall?: boolean }>`
    width: 5rem;
    height: 5rem;
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    ${({ isSmall }) =>
        isSmall &&
        css`
            width: 3.5rem;
            height: 3.5rem;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        `}
`;

export const Dot = styled.div`
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.dot};
    margin: 0.125rem;
`;
