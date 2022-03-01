import React, { FC, useMemo } from 'react';
import { Paragraph as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';
import { getColor } from 'components/Icon';

export interface ParagraphProps {
    variant?: keyof Colors;
    noMargin?: boolean;
    className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, variant = 'text', noMargin, className }) => {
    const theme = useTheme();
    const color = getColor(theme.colors, variant, theme.colors.text);

    return (
        <Text color={color} noMargin={noMargin} className={className}>
            {children}
        </Text>
    );
};

export default Paragraph;
