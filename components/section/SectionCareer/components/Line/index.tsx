import { FC } from 'react';
import styles from './Line.module.scss';

interface LineProps {
    year: number;
}

const Line: FC<LineProps> = ({ year }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.year}>{year}</span>
            <svg className={styles.line} height={16} width="100%">
                <line x1="0" y1="8" x2="100%" y2="8" stroke="white" strokeWidth={1} strokeDasharray={8} strokeDashoffset={0} />
            </svg>
        </div>
    );
};

export default Line;
