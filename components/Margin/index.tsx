import classNames from 'classnames';
import { FC } from 'react';

type size = number | 'auto';

interface MarginProps {
    all?: size;
    horizontal?: size;
    vertical?: size;
    top?: size;
    right?: size;
    bottom?: size;
    left?: size;
}

const Margin: FC<MarginProps> = ({ children, all, bottom, right }) => {
    return <div className={classNames('m', { [`m--${all}`]: all, [`mb--${bottom}`]: bottom, [`mr--${right}`]: right })}>{children}</div>;
};

export default Margin;
