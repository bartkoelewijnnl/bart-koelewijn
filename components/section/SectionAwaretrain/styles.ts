import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CardComponent from 'components/Card';
import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { Row } from 'react-grid-system';
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

export const PhoneWrapper = styled.div`
    position: relative;
`;

export const Phone = styled.div`
    margin-right: 3rem;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    overflow: hidden;

    &:before {
        content: '';
        top: 0;
        left: 25%;
        height: 1.5rem;
        position: absolute;
        width: calc(50% - 3rem);
        background-color: ${({ theme }) => rgba(theme.colors.white, 0.25)};
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        z-index: 1;
    }

    @media (max-width: 432px) {
        margin-right: 0rem;

        &:before {
            width: 50%;
        }
    }
`;

export const Top = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.awaretrain.primary};
    padding: 3rem 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Gif = styled(motion.div)<{ correctAnswers: number }>`
    height: 14rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => rgba(theme.colors.white, 0.1)};
    width: 100%;
    margin-bottom: -4rem;
    background-image: url('/images/awaretrain-bad.gif');
    background-size: cover;
    background-position: center center;

    ${({ correctAnswers }) =>
        correctAnswers === 1 &&
        css`
            background-image: url('/images/awaretrain-mediocre.gif');
        `}

    ${({ correctAnswers }) =>
        correctAnswers === 2 &&
        css`
            background-image: url('/images/awaretrain-perfect.gif');
        `}
`;

export const Bottom = styled(motion.div)`
    background-image: linear-gradient(#f1f4fb, ${rgba('#f1f4fb', 0)});
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
`;

export const Button = styled(motion.button)`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 3.5rem;
    background-color: #ff6001;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    color: white;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem ${rgba('#ee5d1e', 0.3)};
    }
`;

export const Card = styled(CardComponent)`
    margin-left: 25%;

    @media (max-width: 432px) {
        margin-left: 0;
        margin-right: 2.5rem;
    }
`;

export const Website = styled(motion.input)`
    width: 100%;
    height: 3rem;
    background-color: #2081dd;
    border: 2px solid ${({ theme }) => rgba(theme.colors.white, 0.3)};
    border-radius: 6px;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
    -webkit-appearance: none;
`;

export const Question = styled(motion.span)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    display: inline-block;
    align-self: flex-start;
`;

export const Answers = styled(motion.div)<{ isFirst?: boolean }>`
    border: 1px solid #eaf0f7;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    z-index: 1;

    ${({ isFirst }) =>
        isFirst
            ? css`
                  border-bottom-color: transparent;
                  border-bottom-left-radius: 0;
                  border-bottom-right-radius: 0;
              `
            : css`
                  border-top-left-radius: 0;
                  border-top-right-radius: 0;
              `}
`;

export const Explanation = styled(motion.div)`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const ExplanationTitle = styled.span`
    color: ${({ theme }) => theme.colors.awaretrain.primary};
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    margin-bottom: 0.5rem;
`;

export const ExplanationText = styled(motion.span)`
    font-size: 0.9375rem;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.colors.awaretrain.dark};
`;
