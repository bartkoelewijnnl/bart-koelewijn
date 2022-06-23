import classNames from 'classnames';
import React, { FC } from 'react';

export interface RowProps {
    className?: string;
}

const Row: FC<RowProps> = ({ children, className }) => {
    return <div className={classNames('row', className)}>{children}</div>;
};

export default Row;
