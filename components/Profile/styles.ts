import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { maxWidthBreakpoint } from 'utils/breakpoint';

export const Picture = styled.div`
    border-radius: 1rem;
    border-top-right-radius: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    ${maxWidthBreakpoint(
        'sm',
        css`
            max-width: 17rem;
            margin: 2rem auto 5rem;
        `
    )}
`;

export const ImageWrapper = styled.div`
    border-radius: 1rem;
    border-top-right-radius: 2.5rem;
    overflow: hidden;
    display: inline-flex;
`;
