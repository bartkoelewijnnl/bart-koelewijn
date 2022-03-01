import styled from '@emotion/styled';
import { rgba } from 'polished';

export const Phone = styled.div`
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 2.5rem;
    padding: 3rem 2rem 0;
    display: flex;
    flex-direction: column;

    &:before {
        content: '';
        top: 0;
        left: 25%;
        height: 1.5rem;
        position: absolute;
        width: 50%;
        background-color: ${({ theme }) => rgba(theme.colors.white, 0.25)};
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    padding-top: 0.5rem;
    padding-left: 3.5rem;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 4px;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 4px;
`;
