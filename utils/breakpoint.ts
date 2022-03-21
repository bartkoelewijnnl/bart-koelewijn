import { ScreenClass, ScreenClassProvider } from 'react-grid-system';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled/types/base';

export const BREAKPOINTS = [768, 992, 1200, 1440, 1440];
export const SCREEN_CLASSESS: ScreenClass[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const maxWidthBreakpoint = (screenClass: ScreenClass, styles: SerializedStyles): SerializedStyles => {
    const index = SCREEN_CLASSESS.indexOf(screenClass);

    if (screenClass === 'xxl' || index === -1) {
        return css();
    }

    return css`
        @media (max-width: ${BREAKPOINTS[index] - 1}px) {
            ${styles}
        }
    `;
};
