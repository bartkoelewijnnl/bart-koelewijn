import { FC } from 'react';
import { Wrapper } from './styles';

interface ItemProps {
    height: number;
}

const Item: FC<ItemProps> = ({ height }) => {
    return <Wrapper></Wrapper>;
};

export default Item;
