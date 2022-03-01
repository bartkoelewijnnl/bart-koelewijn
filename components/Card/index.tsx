import { useTheme } from '@emotion/react';
import { getColor } from 'components/Icon';
import { Paragraph } from 'components/text';
import H3 from 'components/text/H3';
import { FC } from 'react';
import { Colors } from 'theme';
import { Card as Wrapper } from './styles';

export interface CardProps {
    title: string;
    subtitle: string;
    variant: keyof Colors;
    lightVariant: keyof Colors;
    className?: string;
}

const Card: FC<CardProps> = ({ title, subtitle, variant, lightVariant, className }) => {
    const theme = useTheme();
    const backgroundColor = getColor(theme.colors, lightVariant, theme.colors.lightBlue);

    return (
        <Wrapper className={className} backgroundColor={backgroundColor}>
            <H3 variant={variant}>{title}</H3>
            <Paragraph variant={variant} noMargin>
                {subtitle}
            </Paragraph>
        </Wrapper>
    );
};

export default Card;
