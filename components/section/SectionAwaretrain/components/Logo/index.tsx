import Icon from 'components/Icon';
import { FC } from 'react';
import { Wrapper } from './styles';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <Wrapper layout>
            <Icon name="awaretrain" size={2} color="white" />
        </Wrapper>
    );
};

export default Logo;
