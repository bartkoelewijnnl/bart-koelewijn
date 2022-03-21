import { FC } from 'react';
import { FrameColor, Overlay, Wrapper } from './styles';
import BikeWheels from 'public/images/bike-wheels.png';
import BikeSteer from 'public/images/bike-steer.png';
import BikeGlossy from 'public/images/bike-glossy.png';
import BikeMatt from 'public/images/bike-matt.png';
import BikeGroupset from 'public/images/bike-groupset.png';
import Image from 'next/image';

interface BikeProps {
    color: string;
    isGlossy: boolean;
}

const Bike: FC<BikeProps> = ({ color, isGlossy }) => {
    return (
        <Wrapper>
            <Image src={BikeWheels} alt="Wielen van de geconfigureerde fiets" />
            <FrameColor style={{ backgroundColor: color }} />
            <Overlay>
                <Image src={BikeSteer} alt="Stuur van de geconfigureerde fiets" />
            </Overlay>
            <Overlay opacity={+!isGlossy}>
                <Image src={BikeMatt} alt="Afwerking van de geconfigureerde fiets" />
            </Overlay>
            <Overlay opacity={+isGlossy}>
                <Image src={BikeGlossy} alt="Afwerking van de geconfigureerde fiets" />
            </Overlay>
            <Overlay>
                <Image src={BikeGroupset} alt="Groepset van de geconfigureerde fiets" />
            </Overlay>
        </Wrapper>
    );
};

export default Bike;
