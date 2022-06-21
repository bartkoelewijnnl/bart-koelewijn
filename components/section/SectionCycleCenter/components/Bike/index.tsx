import { FC } from 'react';
import BikeWheels from 'public/images/bike-wheels.png';
import BikeSteer from 'public/images/bike-steer.png';
import BikeGlossy from 'public/images/bike-glossy.png';
import BikeMatt from 'public/images/bike-matt.png';
import BikeGroupset from 'public/images/bike-groupset.png';
import Image from 'next/image';
import styles from './Bike.module.scss';
import classNames from 'classnames';

interface BikeProps {
    color: string;
    isGlossy: boolean;
}

const Bike: FC<BikeProps> = ({ color, isGlossy }) => {
    return (
        <div className={styles.bike}>
            <Image src={BikeWheels} alt="Wielen van de geconfigureerde fiets" />
            <div className={styles['bike__frame']} style={{ backgroundColor: color }} />
            <div className={styles['bike__overlay']}>
                <Image src={BikeSteer} alt="Stuur van de geconfigureerde fiets" />
            </div>
            <div
                className={classNames(styles['bike__overlay'], {
                    [styles['bike__overlay--transparent']]: isGlossy
                })}
            >
                <Image src={BikeMatt} alt="Afwerking van de geconfigureerde fiets" />
            </div>
            <div
                className={classNames(styles['bike__overlay'], {
                    [styles['bike__overlay--transparent']]: !isGlossy
                })}
            >
                <Image src={BikeGlossy} alt="Afwerking van de geconfigureerde fiets" />
            </div>
            <div className={styles['bike__overlay']}>
                <Image src={BikeGroupset} alt="Groepset van de geconfigureerde fiets" />
            </div>
        </div>
    );
};

export default Bike;
