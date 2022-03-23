import { RoundButton } from 'components/button';
import { FC } from 'react';
import { Link } from 'react-scroll';
import { Dots, Cta } from './styles';

interface IntroCtaProps {}

const IntroCta: FC<IntroCtaProps> = () => {
    return (
        <Cta>
            <Dots isSmall />
            <Link href="#awaretrain" to="awaretrain" smooth offset={-64} aria-label="Scroll naar inhoud">
                <RoundButton aria-label="Scroll naar inhoud button" />
            </Link>
        </Cta>
    );
};

export default IntroCta;
