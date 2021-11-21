import styled from '@emotion/styled';
import { rgba } from 'polished';

export const Switch = styled.label`
    display: inline-block;
    height: 2rem;
    width: 3.5rem;
    position: relative;
    // TODO extract
    position: fixed;
    right: 40px;
    top: 40px;

    .switch {
        width: 3.5rem;
        height: 2rem;
        position: absolute;
        top: 0;
        background-color: ${({ theme }) => rgba(theme.colors.primary, 0)};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        border-radius: 1rem;
        transition: background 0.4s ease;

        &:hover {
            cursor: pointer;
        }

        &:before {
            position: absolute;
            content: '';
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            top: calc(0.375rem - 2px);
            left: calc(0.375rem - 2px);
            transition: left 0.3s ease;
            background-color: ${({ theme }) => theme.colors.primary};
        }
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .switch {
            background-color: ${({ theme }) => theme.colors.primary};

            &:before {
                left: calc(1.875rem - 2px);
                background-color: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;
