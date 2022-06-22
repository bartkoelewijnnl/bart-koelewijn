import { FC } from 'react';
import styles from './FinishPicker.module.scss';
import classNames from 'classnames';

interface FinishPickerProps {
    isGlossy: boolean;
    setIsGlossy: (isGlossy: boolean) => void;
}

const FinishPicker: FC<FinishPickerProps> = ({ isGlossy, setIsGlossy }) => {
    return (
        <ul className={styles.picker}>
            <li
                className={classNames(styles['picker__option'], {
                    [styles['picker__option--active']]: !isGlossy
                })}
                onClick={() => setIsGlossy(false)}
            >
                Matt
            </li>
            <li
                className={classNames(styles['picker__option'], {
                    [styles['picker__option--active']]: isGlossy
                })}
                onClick={() => setIsGlossy(true)}
            >
                Glossy
            </li>
        </ul>
    );
};

export default FinishPicker;
