import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from 'theme/light';

export const Picker = styled.ul`
    background-color: ${({ theme }) => theme.colors.cycleCenter.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const Option = styled.li<{ isActive: boolean }>`
    list-style-type: none;
    height: 3rem;
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.cycleCenter.active : theme.colors.white)};
    border-radius: 0.25rem;
    display: inline-flex;
    padding: 0 12px;
    align-items: center;
    color: ${({ theme }) => theme.colors.cycleCenter.text};

    &:hover {
        cursor: pointer;
    }
`;
