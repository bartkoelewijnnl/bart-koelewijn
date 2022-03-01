import { Icons } from 'components/Icon';
import { useThemeContext } from 'providers/ThemeProvider';
import { FC } from 'react';
import { Button as Wrapper, Icon } from './styles';

interface ButtonProps {
    isOutline?: boolean;
    ariaLabel?: string;
    icon?: keyof Icons;
}

const Button: FC<ButtonProps> = ({ children, isOutline, ariaLabel, icon }) => {
    const { isDark } = useThemeContext();

    return (
        <Wrapper aria-label={ariaLabel} isOutline={isOutline} isDark={isDark}>
            {icon && <Icon color={isOutline ? 'button' : 'white'} name={icon} />}
            {children}
        </Wrapper>
    );
};

export default Button;
