import { css } from '@emotion/react';
import styled from '@emotion/styled';
import IconComponent from 'components/Icon';
import { rgba } from 'polished';

export const Button = styled.a<{ isOutline?: boolean; isDark?: boolean; isWhite?: boolean }>`
    height: 3.5rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    font-family: 'Lato', sans-serif;
    padding: 0 24px;
    font-size: 1rem;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

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

    ${({ theme, isWhite, isOutline }) =>
        isWhite &&
        !isOutline &&
        css`
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
        `}

    ${({ theme, isWhite, isOutline }) =>
        isWhite &&
        isOutline &&
        css`
            border-color: ${theme.colors.white};
            color: ${theme.colors.white};
        `}
`;

export const Icon = styled(IconComponent)`
    margin-right: 16px;
`;
