import styled from '@emotion/styled';
import { rgba } from 'polished';

export const Phone = styled.div`
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 2.5rem;
    padding: 3rem 2rem 0;
    display: flex;
    flex-direction: column;
    max-width: 24rem;
    margin: 0 auto;
    margin-bottom: 10rem;
    position: relative;
    padding-bottom: 2rem;

    &:before {
        content: '';
        top: 0;
        left: 30%;
        height: 1.5rem;
        position: absolute;
        width: 40%;
        background-color: ${({ theme }) => rgba(theme.colors.white, 0.25)};
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 3rem;
    margin-bottom: 2rem;

    /* Grid */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 6.5rem);
    column-gap: 0.5rem;
    row-gap: 1rem;
`;
