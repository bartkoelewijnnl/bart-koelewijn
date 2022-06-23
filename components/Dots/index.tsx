import classNames from 'classnames';
import { FC } from 'react';

interface DotsProps {
    className?: string;
    isSmall?: boolean;
}

const Dots: FC<DotsProps> = ({ className, isSmall }) => {
    return (
        <div className={classNames('dots', { 'dots--small': isSmall }, className)}>
            {Array.from(Array(isSmall ? 9 : 16).keys()).map((dot) => (
                <div className="dots__dot" key={dot} />
            ))}
        </div>
    );
};

export default Dots;
