import { useTheme } from '@emotion/react';
import { FC } from 'react';
import { Colors } from 'theme';
import { Badge as Wrapper } from './styles';

export interface BadgeProps {
    variant: keyof Colors;
    lightVariant: keyof Colors;
    className?: string;
}

const Badge: FC<BadgeProps> = ({ variant, lightVariant, className }) => {
    const theme = useTheme();
    const backgroundColor = theme.colors[lightVariant];

    return <Wrapper className={className} backgroundColor={backgroundColor}></Wrapper>;
};

export default Badge;
