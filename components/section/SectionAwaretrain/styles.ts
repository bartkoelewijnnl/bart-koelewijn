import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CardComponent from 'components/Card';
import { Row } from 'components/grid';
import { maxWidthBreakpoint } from 'utils/breakpoint';

export const Section = styled(Row)`
    margin-bottom: 7.5rem;

    ${maxWidthBreakpoint(
        'sm',
        css`
            margin-bottom: 5rem;
        `
    )}
`;

export const PhoneCardWrapper = styled.div`
    ${maxWidthBreakpoint(
        'sm',
        css`
            max-width: 24rem;
            margin: 0 auto 2rem;
        `
    )}
`;

export const Card = styled(CardComponent)`
    margin-left: 25%;

    @media (max-width: 432px) {
        margin-left: 0;
        margin-right: 2.5rem;
    }
`;
