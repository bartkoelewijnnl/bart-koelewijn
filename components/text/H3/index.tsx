import React, { FC, useMemo } from 'react';
import { H3 as Text } from './styles';
import { Colors } from 'theme/colors';
import { useTheme } from '@emotion/react';

export interface ParagraphProps {
    variant?: keyof Colors;
    className?: string;
}

const H3: FC<ParagraphProps> = ({ children, variant = 'blue', className }) => {
    const theme = useTheme();

    return (
        <Text color={theme.colors[variant]} className={className}>
            {children}
        </Text>
    );
};

export default H3;
