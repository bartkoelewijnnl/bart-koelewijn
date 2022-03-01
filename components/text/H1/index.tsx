import React, { FC, useMemo } from 'react';
import { H1 as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';
import { getColor } from 'components/Icon';

export interface ParagraphProps {
    variant?: keyof Colors;
    className?: string;
}

const H1: FC<ParagraphProps> = ({ children, variant = 'primary', className }) => {
    const theme = useTheme();
    const color = getColor(theme.colors, variant, theme.colors.primary);

    return (
        <Text color={color} className={className}>
            {children}
        </Text>
    );
};

export default H1;
