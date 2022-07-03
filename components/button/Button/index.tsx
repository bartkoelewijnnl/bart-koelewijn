import Icon, { Icons } from 'components/Icon';
import { AnchorHTMLAttributes, ElementType, FC } from 'react';
import classNames from 'classnames';

interface ButtonProps extends AnchorHTMLAttributes<HTMLElement> {
    isOutline?: boolean;
    icon?: keyof Icons;
    isWhite?: boolean;
    as?: ElementType;
}

const Button: FC<ButtonProps> = ({ children, isOutline, isWhite, icon, as: Component = "a", ...props }) => {
    return (
        <Component
            className={classNames('button', {
                'button--light': isWhite,
                'button--outline': isOutline,
                'button--outline--light': isOutline && isWhite
            })}
            {...props}
        >
            {icon && (
                <Icon
                    className="button__icon"
                    color={(isOutline && !isWhite) || (!isOutline && isWhite) ? 'button' : 'white'}
                    name={icon}
                />
            )}
            {children}
        </Component>
    );
};

export default Button;
