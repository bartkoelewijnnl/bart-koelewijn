import { css } from '@emotion/react';
import styled from '@emotion/styled';
import IconComponent from 'components/Icon';
import { rgba } from 'polished';

export const Button = styled.button<{ isOutline?: boolean; isDark?: boolean }>`
    height: 3.5rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    font-family: 'Lato', sans-serif;
    padding: 0 24px;
    font-size: 1rem;
    line-height: 1;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => rgba(theme.colors.button, 0.3)};
    }

    ${({ theme, isOutline, isDark }) =>
        isOutline &&
        css`
            background-color: transparent;
            border: 2px solid ${theme.colors.button};
            color: ${isDark ? theme.colors.white : theme.colors.primary};
        `}
`;

export const Icon = styled(IconComponent)`
    margin-right: 16px;
`;
