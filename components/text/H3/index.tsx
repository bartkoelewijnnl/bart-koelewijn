import React, { FC, useMemo } from 'react';
import { H3 as Text } from './styles';
import { Colors } from 'theme';
import { useTheme } from '@emotion/react';
import { getColor } from 'components/Icon';

export interface ParagraphProps {
    variant?: keyof Colors;
    className?: string;
}

const H3: FC<ParagraphProps> = ({ children, variant = 'blue', className }) => {
    const theme = useTheme();
    const color = getColor(theme.colors, variant, theme.colors.blue);

    return (
        <Text color={color} className={className}>
            {children}
        </Text>
    );
};

export default H3;
