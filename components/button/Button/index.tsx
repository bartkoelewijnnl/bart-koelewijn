import Icon, { Icons } from 'components/Icon';
import { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface ButtonProps extends Omit<HTMLProps<HTMLAnchorElement>, 'as'> {
    isOutline?: boolean;
    icon?: keyof Icons;
    isWhite?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isOutline, isWhite, icon }) => {
    return (
        <button
            className={classNames('button', {
                'button--light': isWhite,
                'button--outline': isOutline,
                'button--outline--light': isOutline && isWhite
            })}
        >
            {icon && (
                <Icon
                    className="button__icon"
                    color={(isOutline && !isWhite) || (!isOutline && isWhite) ? 'button' : 'white'}
                    name={icon}
                />
            )}
            {children}
        </button>
    );
};

export default Button;
