import styled from '@emotion/styled';
import { darken } from 'polished';

interface ColorProps {
    color: string;
    isActive?: boolean;
}

const Color = styled.div<ColorProps>`
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    background: ${({ color }) => `linear-gradient(45deg, ${color}, ${darken(0.2, color)})`};
    border-radius: 0.5rem;
    justify-content: center;
    border: ${({ isActive }) => (isActive ? '3px' : 0)} solid ${({ color }) => darken(0.1, color)};
    transition: border 0.2s;

    &:hover {
        border-width: 3px;
        cursor: pointer;
    }
`;

export default Color;
