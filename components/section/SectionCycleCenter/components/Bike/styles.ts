import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { maxWidthBreakpoint } from 'utils/breakpoint';
import { prefix } from 'utils/prefix';

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
    margin-right: 1rem;

    ${maxWidthBreakpoint(
        'sm',
        css`
            margin-right: 0;
        `
    )}
`;

export const FrameColor = styled.div`
    width: 100%;
    height: 100%;
    mask-image: url('${prefix}/images/bike-color.png');
    mask-size: 100%;
    transition: background 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Overlay = styled.div<{ opacity?: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ opacity }) => opacity ?? 1};
    transition: opacity 0.4s ease;
`;
