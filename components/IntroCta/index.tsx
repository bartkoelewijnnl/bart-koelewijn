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
            <Link className="rounded--full color--primary d--inline-flex" href="#websites" to="websites" smooth offset={-64} aria-label="Scroll naar inhoud">
                <RoundButton as="span" />
            </Link>
        </div>
    );
};

export default IntroCta;
