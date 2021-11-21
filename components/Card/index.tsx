import { useTheme } from '@emotion/react';
import { Paragraph } from 'components/text';
import H3 from 'components/text/H3';
import { FC } from 'react';
import { Colors } from 'theme';
import { Card as Wrapper } from './styles';

export interface CardProps {
    title: string;
    variant: keyof Colors;
    lightVariant: keyof Colors;
    className?: string;
}

const Card: FC<CardProps> = ({ title, variant, lightVariant, className }) => {
    const theme = useTheme();
    const backgroundColor = theme.colors[lightVariant];

    return (
        <Wrapper className={className} backgroundColor={backgroundColor}>
            <H3 variant={variant}>{title}</H3>
            <Paragraph variant={variant} noMargin>
                Bewustwording creëren
            </Paragraph>
        </Wrapper>
    );
};

export default Card;
