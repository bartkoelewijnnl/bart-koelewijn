import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 1rem;
    width: 100%;
    margin-bottom: 6.5rem;
    display: flex;
    align-items: center;
`;

export const Year = styled.span`
    font-size: 1rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.white};
    width: 3rem;
`;

export const Line = styled.svg`
    flex: 1;
    opacity: 0.5;
`;
