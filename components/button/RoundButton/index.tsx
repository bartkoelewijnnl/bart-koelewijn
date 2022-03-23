import Icon from 'components/Icon';
import { FC, HTMLProps } from 'react';
import { Button } from './styles';

interface RoundButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'as' | 'type'> {}

const RoundButton: FC<RoundButtonProps> = (props) => {
    return (
        <Button {...props}>
            <Icon name="down" />
        </Button>
    );
};

export default RoundButton;
