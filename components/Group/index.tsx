import React, { FC } from 'react';
import { Group as Wrapper } from './styles';

export interface GroupProps {
    spaceBetween?: boolean;
    right?: boolean;
    className?: string;
    isLarge?: boolean;
}

const Group: FC<GroupProps> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default Group;
