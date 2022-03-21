import { css } from '@emotion/react';
import styled from '@emotion/styled';
import DotsComponent from 'components/Dots';
import { maxWidthBreakpoint } from 'utils/breakpoint';

export const Cta = styled.div`
    margin-top: 4rem;

    ${maxWidthBreakpoint(
        'sm',
        css`
            margin-top: 2rem;
            margin-bottom: 5rem;
        `
    )}
`;

export const Dots = styled(DotsComponent)`
    margin-left: 2rem;
    margin-bottom: -2.5rem;
`;
