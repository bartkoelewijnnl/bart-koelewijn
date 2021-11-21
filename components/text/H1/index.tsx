import React, { FC, useMemo } from 'react';
import { H1 as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';

export interface ParagraphProps {
    variant?: keyof Colors;
    className?: string;
}

const H1: FC<ParagraphProps> = ({ children, variant = 'primary', className }) => {
    const theme = useTheme();

    return (
        <Text color={theme.colors[variant]} className={className}>
            {children}
        </Text>
    );
};

export default H1;
