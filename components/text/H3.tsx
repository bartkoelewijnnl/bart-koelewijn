import React, { FC } from 'react';
import classNames from 'classnames';

export interface H3Props {
    className?: string;
    variant: string;
}

const H3: FC<H3Props> = ({ children, className, variant = 'blue' }) => {
    return <h3 className={classNames('h3', `color--${variant}`, className)}>{children}</h3>;
};

export default H3;
