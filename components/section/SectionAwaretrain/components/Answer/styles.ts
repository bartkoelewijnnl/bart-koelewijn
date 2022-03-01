import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const Answer = styled.label<{ background?: string }>`
    list-style-type: none;
    border-bottom: 1px solid #eaf0f7;
    display: flex;
    padding: 1rem 16px;
    align-items: center;
    background-color: ${({ background }) => background};

    &:hover {
        cursor: pointer;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const Text = styled.span<{ color?: string }>`
    font-size: 0.9375rem;
    line-height: 1.25rem;
    color: ${({ theme, color }) => color ?? theme.colors.awaretrain.dark};
`;

export const Radio = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.awaretrain.input};
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        position: relative;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: white;
    }
`;

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    &:hover + div {
        &:after {
            background-color: ${({ theme }) => darken(0.15, theme.colors.awaretrain.input)};
            width: 0.375rem;
            height: 0.375rem;
        }
    }

    &:checked + div {
        background-color: ${({ theme }) => theme.colors.awaretrain.active};

        &:after {
            width: 0.375rem;
            height: 0.375rem;
            background-color: white;
        }
    }
`;

export const RadioWrapper = styled.div`
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    flex: 0 0 1.25rem;
    margin-right: 12px;
    justify-content: center;
    align-items: center;
`;
