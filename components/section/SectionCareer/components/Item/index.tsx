import { FC } from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames';

export interface ItemProps {
    title: string;
    company: string;
    width?: number;
    height: number;
    columnStart?: number;
    rowStart?: number;
    active?: boolean;
}

const Item: FC<ItemProps> = ({ width, active, height, company, columnStart, rowStart, title }) => {
    return (
        <div
            className={classNames(styles.item, { [styles['item--active']]: active })}
            style={{
                gridRowStart: rowStart,
                gridRowEnd: `span ${height}`,
                gridColumnStart: columnStart,
                gridColumnEnd: `span ${width ?? 1}`
            }}
        >
            <span className={classNames(styles['item__title'], { [styles['item--active__title']]: active })}>{title}</span>
            <span className={classNames(styles['item__company'], { [styles['item--active__company']]: active })}>{company}</span>
        </div>
    );
};

export default Item;
