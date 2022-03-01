import { FC } from 'react';
import { Wrapper, Year, Line as SvgLine } from './styles';

interface LineProps {
    year: number;
}

const Line: FC<LineProps> = ({ year }) => {
    return (
        <Wrapper>
            <Year>{year}</Year>
            <SvgLine height={16} width="100%">
                <line x1="0" y1="8" x2="100%" y2="8" stroke="white" strokeWidth={1} strokeDasharray={8} strokeDashoffset={0} />
            </SvgLine>
        </Wrapper>
    );
};

export default Line;
