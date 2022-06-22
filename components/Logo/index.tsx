import Image from 'next/image';
import { FC } from 'react';
import Svg from 'public/images/bart-koelewijn.svg';
import Margin from 'components/Margin';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <Margin top={4} bottom={8}>
            <Image src={Svg} height={56} width={56} alt="Logo Bart Koelewijn" />
        </Margin>
    );
};

export default Logo;
