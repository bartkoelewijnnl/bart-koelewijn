import Icon from 'components/Icon';
import { FC } from 'react';
import { Button } from './styles';

interface RoundButtonProps {}

const RoundButton: FC<RoundButtonProps> = () => {
    return (
        <Button>
            <Icon name='down' />
        </Button>
    );
};

export default RoundButton;
