import { RoundButton } from 'components/button';
import { FC } from 'react';
import { Link } from 'react-scroll';
import { Dots, Cta } from './styles';

interface IntroCtaProps {}

const IntroCta: FC<IntroCtaProps> = () => {
    return (
        <Cta>
            <Dots isSmall />
            <Link to="awaretrain" smooth offset={-64}>
                <RoundButton />
            </Link>
        </Cta>
    );
};

export default IntroCta;
