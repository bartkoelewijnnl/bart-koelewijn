import styled from '@emotion/styled';
import { rgba } from 'polished';

export const Button = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: -5px 10px 20px ${({ theme }) => rgba(theme.colors.primary, 0.2)};
    border: none;

    &:hover {
        cursor: pointer;
    }
`;
