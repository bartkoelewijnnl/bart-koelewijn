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

const Margin: FC<MarginProps> = ({ children, all, bottom, top, right, left }) => {
    return (
        <div
            className={classNames('m', {
                [`m--${all}`]: all,
                [`mb--${bottom}`]: bottom,
                [`mt--${top}`]: top,
                [`mr--${right}`]: right,
                [`ml--${left}`]: left
            })}
        >
            {children}
        </div>
    );
};

export default Margin;
