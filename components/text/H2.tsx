import React, { FC } from 'react';
import classNames from 'classnames';

export interface ParagraphProps {
    className?: string;
}

const H2: FC<ParagraphProps> = ({ children, className }) => {
    return <h2 className={classNames('h2', className)}>{children}</h2>;
};

export default H2;
