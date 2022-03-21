import { Icons } from 'components/Icon';
import { useThemeContext } from 'providers/ThemeProvider';
import { FC, HTMLProps } from 'react';
import { Button as Wrapper, Icon } from './styles';

interface ButtonProps extends Omit<HTMLProps<HTMLAnchorElement>, 'as'> {
    isOutline?: boolean;
    icon?: keyof Icons;
    isWhite?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isOutline, isWhite, icon, ...props }) => {
    const { isDark } = useThemeContext();

    return (
        <Wrapper isOutline={isOutline} isDark={isDark} isWhite={isWhite} {...props}>
            {icon && <Icon color={(isOutline && !isWhite) || (!isOutline && isWhite) ? 'button' : 'white'} name={icon} />}
            {children}
        </Wrapper>
    );
};

export default Button;
