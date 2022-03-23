import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import { maxWidthBreakpoint } from 'utils/breakpoint';
import CardComponent from 'components/Card';

export const Card = styled(CardComponent)`
    ${maxWidthBreakpoint(
        'sm',
        css`
            margin-right: 2.5rem;
        `
    )}
`;

// export const Section = styled(Row)`
//     margin-bottom: 7.5rem;
// `;

export const Content = styled.div`
    display: flex;
`;

export const BikeContent = styled.div`
    display: flex;
    align-items: center;

    ${maxWidthBreakpoint(
        'sm',
        css`
            flex-direction: column;
        `
    )}
`;

export const Background = styled.div`
    background-color: ${({ theme }) => theme.colors.cycleCenter.background};
    position: relative;
    margin-right: 3rem;
    border-radius: 1rem;
    border-top-left-radius: 2.5rem;
    padding: 2rem;

    ${maxWidthBreakpoint(
        'md',
        css`
            margin-bottom: 3.5rem;
        `
    )}

    ${maxWidthBreakpoint(
        'sm',
        css`
            margin-right: 0;
        `
    )}
`;

export const Side = styled.div``;

export const Category = styled.span`
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    color: ${({ theme }) => rgba(theme.colors.cycleCenter.primary, 0.3)};
`;
