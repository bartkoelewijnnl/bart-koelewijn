import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
    margin-right: 1rem;
`;

export const FrameColor = styled.div`
    width: 100%;
    height: 100%;
    mask-image: url(/images/bike-color.png);
    mask-size: 100%;
    transition: background 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
