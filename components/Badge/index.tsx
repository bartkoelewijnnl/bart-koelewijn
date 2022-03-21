import { useTheme } from '@emotion/react';
import Icon, { Icons, getColor } from 'components/Icon';
import { FC } from 'react';
import { Colors } from 'theme';
import { Badge as Wrapper } from './styles';
import ReactTooltip from 'react-tooltip';

export interface BadgeProps {
    color: keyof Colors;
    lightColor: keyof Colors;
    icon: keyof Icons;
    className?: string;
}

const Badge: FC<BadgeProps> = ({ color, lightColor, className, icon }) => {
    const theme = useTheme();
    const backgroundColor = getColor(theme.colors, lightColor, theme.colors.lightBlue);

    return (
        <>
            <Wrapper data-tip="hello world" className={className} backgroundColor={backgroundColor}>
                <Icon name={icon} color={color} />
            </Wrapper>
            {/* <ReactTooltip effect="solid" /> */}
        </>
    );
};

export default Badge;
