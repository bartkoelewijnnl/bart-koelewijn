import React, { FC, useMemo } from 'react';
import { Paragraph as Text } from './styles';
import { Colors } from 'theme/colors';
import { useTheme } from '@emotion/react';

export interface ParagraphProps {
    variant?: keyof Colors;
    center?: boolean;
    className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, variant = 'text', center, className }) => {
    const theme = useTheme();

    return (
        <Text color={theme.colors[variant]} center={center} className={className}>
            {children}
        </Text>
    );
};

export default Paragraph;
