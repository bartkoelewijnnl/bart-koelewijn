import { FC } from 'react';
import { Dots as Wrapper, Dot } from './styles';

interface DotsProps {
    className?: string;
    isSmall?: boolean;
}

const Dots: FC<DotsProps> = ({ className, isSmall }) => {
    return (
        <Wrapper className={className} isSmall={isSmall}>
            {Array.from(Array(isSmall ? 9 : 16).keys()).map((dot) => (
                <Dot key={dot} />
            ))}
        </Wrapper>
    );
};

export default Dots;
