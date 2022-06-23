import { darken } from 'polished';
import { FC } from 'react';
import styles from './ColorPicker.module.scss';

// TODO: maybe in css vars?
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
    // Methods.
    const handleOnColorClick = (color: string) => {
        setColor(color);
    };

    return (
        <div className={styles.picker}>
            {COLORS.map((c) => {
                const isActive = c === color;

                return (
                    <div
                        key={c}
                        style={{
                            background: `linear-gradient(45deg, ${c}, ${darken(0.2, c)})`,
                            border: `${isActive ? '3px' : 0} solid ${darken(0.1, c)}`
                        }}
                        className={styles['picker__color']}
                        onClick={() => handleOnColorClick(c)}
                    />
                );
            })}
        </div>
    );
};

export default ColorPicker;
