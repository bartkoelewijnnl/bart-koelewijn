import styled from '@emotion/styled';
import { rgba } from 'polished';

export const Skills = styled.div`
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: -2rem;
    bottom: -2rem;
    box-shadow: -5px 10px 20px ${({ theme }) => rgba(theme.colors.primary, 0.2)};
    display: grid;
    column-gap: 0.5rem;
    row-gap: 0.5rem;
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const Skill = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
`;
