import classNames from 'classnames';
import { Paragraph } from 'components/text';
import H3 from 'components/text/H3';
import { FC } from 'react';

export interface CardProps {
    title: string;
    subtitle: string;
    variant: string;
    lightVariant: string;
    className?: string;
}

const Card: FC<CardProps> = ({ title, subtitle, variant, lightVariant, className }) => {
    return (
        <div className={classNames('card', `bg--${lightVariant}`, className)}>
            <H3 variant={variant}>{title}</H3>
            <Paragraph variant={variant} noMargin>
                {subtitle}
            </Paragraph>
        </div>
    );
};

export default Card;
