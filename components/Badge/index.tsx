import Icon, { Icons } from 'components/Icon';
import { FC } from 'react';
import classNames from 'classnames';

export interface BadgeProps {
    color: string;
    lightColor: string;
    icon: keyof Icons;
    className?: string;
    title: string;
}

const Badge: FC<BadgeProps> = ({ color, lightColor, icon, title }) => {
    return (
        <div data-tip={title} className={classNames('badge', `bg--${lightColor}`, `color--${color}`)}>
            <Icon name={icon} color={color} />
        </div>
    );
};

export default Badge;
