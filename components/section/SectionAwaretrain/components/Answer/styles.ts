import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Answer = styled.li`
    height: 3rem;
    list-style-type: none;
    border-bottom: 1px solid #eaf0f7;

    &:last-child {
        border-bottom: none;
    }
`;
