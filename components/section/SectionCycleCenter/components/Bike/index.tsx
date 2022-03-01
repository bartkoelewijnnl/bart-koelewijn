import { FC } from 'react';
import { FrameColor, Overlay, Wrapper } from './styles';
import BikeWheels from 'public/images/bike-wheels.png';
import BikeSteer from 'public/images/bike-steer.png';
import Image from 'next/image';

interface BikeProps {
    color: string;
}

const Bike: FC<BikeProps> = ({ color }) => {
    return (
        <Wrapper>
            <Image src={BikeWheels} alt="Wielen van de geconfigureerde fiets" />
            <FrameColor style={{ backgroundColor: color }} />
            <Overlay>
                <Image src={BikeSteer} alt="Stuur van de geconfigureerde fiets" />
            </Overlay>
        </Wrapper>
    );
};

export default Bike;
