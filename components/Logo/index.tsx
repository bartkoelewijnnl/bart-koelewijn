import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';
import Svg from 'public/images/bart-koelewijn.svg';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <Wrapper>
            <Image src={Svg} height={56} width={56} alt="Logo Bart Koelewijn" />
        </Wrapper>
    );
};

export default Logo;
