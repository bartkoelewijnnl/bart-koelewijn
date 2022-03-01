import styled from '@emotion/styled';
import { css } from '@emotion/react';

type size = number | 'auto';

interface MarginProps {
    all?: size;
    horizontal?: size;
    vertical?: size;
    top?: size;
    right?: size;
    bottom?: size;
    left?: size;
}

const getSize = (size: size, horizontal?: boolean) => {
    if (size === 'auto') {
        return 'auto';
    }

    if (horizontal) {
        return `${size * 16}px`;
    }

    return `${size}rem`;
};

const Margin = styled.div<MarginProps>`
    ${({ theme, ...props }) => {
        return css`
            ${props.all &&
            css`
                margin-left: ${getSize(props.all, true)};
                margin-right: ${getSize(props.all, true)};
                margin-bottom: ${getSize(props.all)};
                margin-top: ${getSize(props.all)};
            `}

            ${props.horizontal &&
            css`
                margin-left: ${getSize(props.horizontal, true)};
                margin-right: ${getSize(props.horizontal, true)};
            `}

            ${props.vertical &&
            css`
                margin-bottom: ${getSize(props.vertical)};
                margin-top: ${getSize(props.vertical)};
            `}

            ${props.top &&
            css`
                margin-top: ${getSize(props.top)};
            `}

            ${props.right &&
            css`
                margin-right: ${getSize(props.right, true)};
            `}

            ${props.bottom &&
            css`
                margin-bottom: ${getSize(props.bottom)};
            `}
          
          ${props.left &&
            css`
                margin-right: ${getSize(props.left, true)};
            `}
        `;
    }}
`;

export default Margin;
