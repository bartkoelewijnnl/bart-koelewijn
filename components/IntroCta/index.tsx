import { RoundButton } from 'components/button';
import { FC } from 'react';
import { Dots, Cta } from './styles';

interface IntroCtaProps {}

const IntroCta: FC<IntroCtaProps> = () => {
    return (
        <Cta>
            <Dots isSmall />
            <RoundButton />
        </Cta>
    );
};

export default IntroCta;
