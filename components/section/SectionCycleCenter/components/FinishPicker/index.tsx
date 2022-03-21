import { FC } from 'react';
import { Option, Picker } from './styles';

interface FinishPickerProps {
    isGlossy: boolean;
    setIsGlossy: (isGlossy: boolean) => void;
}

const FinishPicker: FC<FinishPickerProps> = ({ isGlossy, setIsGlossy }) => {
    return (
        <Picker>
            <Option isActive={!isGlossy} onClick={() => setIsGlossy(false)}>
                Matt
            </Option>
            <Option isActive={isGlossy} onClick={() => setIsGlossy(true)}>
                Glossy
            </Option>
        </Picker>
    );
};

export default FinishPicker;
