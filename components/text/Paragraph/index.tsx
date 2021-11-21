import React, { FC, useMemo } from 'react';
import { Paragraph as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';

export interface ParagraphProps {
    variant?: keyof Colors;
    noMargin?: boolean;
    className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, variant = 'text', noMargin, className }) => {
    const theme = useTheme();

    return (
        <Text color={theme.colors[variant]} noMargin={noMargin} className={className}>
            {children}
        </Text>
    );
};

export default Paragraph;
