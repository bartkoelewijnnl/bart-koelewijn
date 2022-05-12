import React, { FC } from 'react';
import { Colors } from 'theme';
import classNames from 'classnames';

export interface ParagraphProps {
    variant?: keyof Colors;
    noMargin?: boolean;
    className?: string;
    isItalic?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({ children, noMargin, isItalic, className, variant = 'text' }) => {
    return (
        <p className={classNames('p', `color--${variant}`, { 'p--no-margin': noMargin, 'p--italic': isItalic }, className)}>{children}</p>
    );
};

export default Paragraph;
