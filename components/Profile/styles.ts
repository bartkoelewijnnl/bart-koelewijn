import styled from '@emotion/styled';
import NextImage from 'next/image';

export const Picture = styled.div`
    border-radius: 1rem;
    border-top-right-radius: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Image = styled(NextImage)`
    border-radius: 1rem;
    border-top-right-radius: 2.5rem;
`;
