import { FC } from 'react';
import Line from '../Line';
import styles from './Lines.module.scss';

interface LinesProps {
    maxYear: number;
    minYear: number;
}

const Lines: FC<LinesProps> = ({ maxYear, minYear }) => {
    // Render.
    const numberOfYears = maxYear - minYear;

    return (
        <div className={styles.lines}>
            {Array.from(Array(numberOfYears + 1).keys()).map((index) => {
                const year = maxYear - index;

                return <Line year={year} key={index} />;
            })}
        </div>
    );
};

export default Lines;
