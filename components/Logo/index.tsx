import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <Wrapper>
            <Image src="/images/bart-koelewijn.svg" height={56} width={56} alt="Logo Bart Koelewijn" />
        </Wrapper>
    );
};

export default Logo;
