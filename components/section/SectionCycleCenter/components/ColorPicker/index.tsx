import { useTheme } from '@emotion/react';
import { FC } from 'react';
import Color from '../Color';
import { Picker } from './styles';

export const COLORS: string[] = [
    '#CEFF00',
    '#CBBBA0',
    '#FF6F12',
    '#F51E01',
    '#CE2C6A',
    '#000838',
    '#0F2A80',
    '#007FFC',
    '#55ACB7',
    '#054947',
    '#74C50C',
    '#041400'
];

interface ColorPickerProps {
    color?: string;
    setColor: (color: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ color = COLORS[0], setColor }) => {
    const handleOnColorClick = (color: string) => {
        setColor(color);
    };

    return (
        <Picker>
            {COLORS.map((c) => {
                const isActive = c === color;

                return <Color isActive={isActive} onClick={() => handleOnColorClick(c)} key={c} color={c} />;
            })}
        </Picker>
    );
};

export default ColorPicker;
