import classNames from 'classnames';
import { Paragraph } from 'components/text';
import H3 from 'components/text/H3';
import { FC } from 'react';
import { Colors } from 'theme';

export interface CardProps {
    title: string;
    subtitle: string;
    variant: keyof Colors;
    lightVariant: keyof Colors;
    className?: string;
}

const Card: FC<CardProps> = ({ title, subtitle, variant, lightVariant, className }) => {
    return (
        <div className={classNames('card', `card--${lightVariant}`, className)}>
            <H3 variant={variant}>{title}</H3>
            <Paragraph variant={variant} noMargin>
                {subtitle}
            </Paragraph>
        </div>
    );
};

export default Card;
