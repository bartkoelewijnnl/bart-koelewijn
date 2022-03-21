import React, { FC, useMemo } from 'react';
import { H1 as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';
import { getColor } from 'components/Icon';
import { useThemeContext } from 'providers/ThemeProvider';

export interface ParagraphProps {
    variant?: keyof Colors;
    className?: string;
}

const H2: FC<ParagraphProps> = ({ children, variant, className }) => {
    const theme = useTheme();
    const { isDark } = useThemeContext();
    const color = getColor(theme.colors, variant ?? isDark ? 'white' : 'black', theme.colors.black);

    return (
        <Text color={color} className={className}>
            {children}
        </Text>
    );
};

export default H2;
