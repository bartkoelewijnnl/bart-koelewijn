import { FC } from 'react';
import styles from '../Websites/Websites.module.scss';
import Icon from 'components/Icon';
import Svg from 'public/logos/kika.svg';
import Image from 'next/image';
import classNames from 'classnames';

interface KiKaProps {}

const KiKa: FC<KiKaProps> = () => {
    return (
        <div className={styles.website} onClick={() => window.open('https://kika.nl/', '_blank')}>
            <Icon
                className={classNames(styles.website__part, styles.website__part__left, 'float top--3 start--2')}
                name="hand"
                size={2}
                fill="#e87511"
            />
            <Icon
                className={classNames(styles.website__part, styles.website__part__right, 'float bottom--6 end--4')}
                name="heart"
                size={2}
                fill="#52006b"
            />
            <div className={styles.website__logo}>
                <Image src={Svg} objectFit="contain" height={70} alt="Logo Bart Koelewijn" />
            </div>
            <a href="https://kika.nl/" rel="noreferrer" target="_blank" className="p p--no-margin color--black d--inline-flex">
                KiKa
                <Icon className="ml--1" name="link" color="black" />
            </a>
            <p className="p color--text p--no-margin">Ieder kind kankervrij</p>
        </div>
    );
};

export default KiKa;
