import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { maxWidthBreakpoint } from 'utils/breakpoint';

export default styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${maxWidthBreakpoint(
        'sm',
        css`
            height: auto;
        `
    )}
`;
