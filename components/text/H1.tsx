import React, { FC } from 'react';
import classNames from 'classnames';

export interface H1Props {
    className?: string;
}

const H1: FC<H1Props> = ({ children, className }) => {
    return <h1 className={classNames('h1', className)}>{children}</h1>;
};

export default H1;
