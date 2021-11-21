import styled from '@emotion/styled';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

export const Skills = styled(motion.div)`
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
