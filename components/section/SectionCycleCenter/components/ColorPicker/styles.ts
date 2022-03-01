import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Picker = styled.div`
    background-color: ${({ theme }) => theme.colors.cycleCenter.white};
    width: 12.5rem;
    padding: 1.5rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
    margin-bottom: 1.5rem;
`;
