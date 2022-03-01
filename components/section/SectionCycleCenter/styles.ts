import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CardComponent from 'components/Card';
import { rgb, rgba } from 'polished';
import { Row } from 'react-grid-system';

// export const Section = styled(Row)`
//     margin-bottom: 7.5rem;
// `;

export const Content = styled.div`
    display: flex;
`;

export const Background = styled.div`
    background-color: ${({ theme }) => theme.colors.cycleCenter.background};
    position: relative;
    margin-right: 3rem;
    border-radius: 1rem;
    border-top-left-radius: 2.5rem;
    padding: 2rem 2rem 2rem 1rem;
`;

export const Side = styled.div``;

export const Category = styled.span`
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    color: ${({ theme }) => rgba(theme.colors.cycleCenter.primary, 0.3)};
`;
