import classNames from 'classnames';
import React, { FC } from 'react';

export interface ContainerProps {
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={classNames('container', className)}>{children}</div>;
};

export default Container;
