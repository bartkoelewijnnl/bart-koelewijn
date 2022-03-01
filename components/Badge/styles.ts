import styled from '@emotion/styled';

export const Badge = styled.div<{ backgroundColor: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
