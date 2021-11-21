import styled from '@emotion/styled';
import CardComponent from 'components/Card';
import { rgba } from 'polished';

export const PhoneWrapper = styled.div`
    position: relative;
`;

export const Phone = styled.div`
    margin-right: 3rem;

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
    }
`;

export const Top = styled.div`
    background-color: #4a72dd;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    padding: 3rem 2rem 0;
`;

export const Bottom = styled.div`
    background-image: linear-gradient(#f1f4fb, ${rgba('#f1f4fb', 0)});
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    margin-top: 1.5rem;
    height: 3.5rem;
    background-color: #ee5d1e;
    border: none;
    border-radius: 8px;
    padding: 0 16px;
    color: white;
    width: 100%;

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
`;

export const Website = styled.input`
    width: 100%;
    height: 3rem;
    background-color: #2081dd;
    border: 2px solid ${({ theme }) => rgba(theme.colors.white, 0.3)};
    border-radius: 6px;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const Question = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-bottom: 4rem;
    display: inline-block;
`;

export const Answers = styled.ul`
    border: 1px solid #eaf0f7;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    margin-top: -3rem;
`;
