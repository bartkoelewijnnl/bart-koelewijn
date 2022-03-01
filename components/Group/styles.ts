import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GroupProps } from '.';

export const Group = styled.div<GroupProps>`
    display: flex;
    justify-content: ${({ spaceBetween, right }) => (spaceBetween ? 'space-between' : right ? 'flex-end' : 'flex-start')};

    > * {
        margin-right: ${({ isLarge }) => (isLarge ? '24px' : '16px')};

        ${({ spaceBetween, right }) =>
            spaceBetween &&
            right &&
            css`
                :only-child {
                    margin-left: auto;
                }
            `};

        &:last-child {
            margin-right: 0;
        }
    }
`;
