import { FC } from 'react';
import { Wrapper, Title, Company } from './styles';

export interface ItemProps {
    title: string;
    company: string;
    width?: number;
    height: number;
    columnStart?: number;
    rowStart?: number;
}

const Item: FC<ItemProps> = ({ width, height, company, columnStart, rowStart, title }) => {
    return (
        <Wrapper width={width} height={height} columnStart={columnStart} rowStart={rowStart}>
            <Title>{title}</Title>
            <Company>{company}</Company>
        </Wrapper>
    );
};

export default Item;
