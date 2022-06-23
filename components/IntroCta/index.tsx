import { RoundButton } from 'components/button';
import Dots from 'components/Dots';
import { FC } from 'react';
import { Link } from 'react-scroll';
import styles from './IntroCta.module.scss';

interface IntroCtaProps {}

const IntroCta: FC<IntroCtaProps> = () => {
    return (
        <div className={styles.cta}>
            <Dots className={styles.dots} isSmall />
            <Link href="#awaretrain" to="awaretrain" smooth offset={-64} aria-label="Scroll naar inhoud">
                <RoundButton aria-label="Scroll naar inhoud button" />
            </Link>
        </div>
    );
};

export default IntroCta;
