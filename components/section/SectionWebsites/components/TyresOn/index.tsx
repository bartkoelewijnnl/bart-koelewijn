import { FC, useRef } from 'react';
import styles from '../Websites/Websites.module.scss';
import Icon from 'components/Icon';
import Logo from './Logo';
import { useHover } from 'usehooks-ts';

interface TyresOnProps {}

const TyresOn: FC<TyresOnProps> = () => {
    const ref = useRef(null);
    const isHover = useHover(ref);

    return (
        <div ref={ref} className={styles.website} onClick={() => window.open('https://www.tyres-on.nl/', '_blank')}>
            <div className={styles.website__logo}>
                {/* 26/3 */}
                <Logo className="w--100" isHover={isHover} width={208} height={26} />
            </div>
            <a href="https://www.tyres-on.nl/" target="_blank" className="p p--no-margin color--black d--inline-flex mt--auto">
                Tyres-on
                <Icon className="ml--1" name="link" color="black" />
            </a>
            <p className="p color--text p--no-margin text--center">De bandenspecialist voor elke auto</p>
        </div>
    );
};

export default TyresOn;
