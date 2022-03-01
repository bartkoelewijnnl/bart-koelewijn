import { FC } from 'react';
import Line from '../Line';
import { Wrapper } from './styles';

interface LinesProps {
    maxYear: number;
    minYear: number;
}

const Lines: FC<LinesProps> = ({ maxYear, minYear }) => {
    // Render.
    const numberOfYears = maxYear - minYear;

    return (
        <Wrapper>
            {Array.from(Array(numberOfYears + 1).keys()).map((index) => {
                const year = maxYear - index;

                return <Line year={year} key={index} />;
            })}
        </Wrapper>
    );
};

export default Lines;
