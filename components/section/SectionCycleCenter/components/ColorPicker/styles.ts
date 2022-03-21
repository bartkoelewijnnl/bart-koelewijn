import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Picker = styled.div`
    background-color: ${({ theme }) => theme.colors.cycleCenter.white};
    width: 11.5rem;
    padding: 1rem;
    padding-right: .5rem;
    padding-bottom: .5rem;
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
    margin-bottom: 1.5rem;
`;
