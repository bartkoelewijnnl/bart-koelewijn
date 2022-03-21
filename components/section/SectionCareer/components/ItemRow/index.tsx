import { FC } from 'react';
import Item, { ItemProps } from '../Item';
import { Left, Right, Row } from './styles';

interface ItemRowProps {
    items: [ItemProps, ItemProps];
}

const ItemRow: FC<ItemRowProps> = ({ items }) => {
    return (
        <Row>
            <Left>
                <Item {...items[0]} />
            </Left>
            <Right>
                <Item {...items[1]} />
            </Right>
        </Row>
    );
};

export default ItemRow;
