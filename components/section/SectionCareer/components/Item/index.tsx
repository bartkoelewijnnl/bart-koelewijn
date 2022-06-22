import { FC } from 'react';
import styles from './Item.module.scss';

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
        <div
            className={styles.item}
            style={{
                gridRowStart: rowStart,
                gridRowEnd: `span ${height}`,
                gridColumnStart: columnStart,
                gridColumnEnd: `span ${width ?? 1}`
            }}
        >
            <span className={styles['item__title']}>{title}</span>
            <span className={styles['item__company']}>{company}</span>
        </div>
    );
};

export default Item;
