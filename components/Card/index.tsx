import { useTheme } from '@emotion/react';
import { Paragraph } from 'components/text';
import H3 from 'components/text/H3';
import { FC } from 'react';
import { Colors } from 'theme/colors';
import { Card as Wrapper } from './styles';

interface CardProps {
    title: string;
    variant: keyof Colors;
    lightVariant: keyof Colors;
}

const Card: FC<CardProps> = ({ title, variant, lightVariant }) => {
    const theme = useTheme();
    const backgroundColor = theme.colors[lightVariant];

    return (
        <Wrapper backgroundColor={backgroundColor}>
            <H3 variant={variant}>{title}</H3>
            <Paragraph variant={variant}>Awaretrain realiseert bewustwording.</Paragraph>
        </Wrapper>
    );
};

export default Card;
