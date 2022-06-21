import classNames from 'classnames';
import React, { FC } from 'react';

interface ScreenClasses {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export interface ColProps extends ScreenClasses {
    offset?: ScreenClasses;
    order?: ScreenClasses; // TODO: order functional.
}

const getSceenClasses = (prefix: string, screenClasses?: ScreenClasses): string[] => {
    if (!screenClasses) {
        return [];
    }

    return Object.entries(screenClasses).reduce((a: string[], [key, value]) => (value ? [...a, `${prefix}--${key}--${value}`] : a), []);
};

const Col: FC<ColProps> = ({ children, offset, order, ...screenClasses }) => {
    // Render.
    const cols = getSceenClasses('col', screenClasses);
    const offsets = getSceenClasses('col__offset', offset);
    const orders = getSceenClasses('col__order', order);

    return <div className={classNames('col', ...cols, ...offsets, ...orders)}>{children}</div>;
};

export default Col;
