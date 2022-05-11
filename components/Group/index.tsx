import classNames from 'classnames';
import React, { FC } from 'react';

export interface GroupProps {
    className?: string;
    isLarge?: boolean;
}

const Group: FC<GroupProps> = ({ children, isLarge, className }) => {
    return <div className={classNames('group', { 'group--large': isLarge }, className)}>{children}</div>;
};

export default Group;
