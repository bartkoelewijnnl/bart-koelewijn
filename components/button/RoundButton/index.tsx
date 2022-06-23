import classNames from 'classnames';
import Icon from 'components/Icon';
import { FC, HTMLProps } from 'react';

interface RoundButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'as' | 'type'> {}

const RoundButton: FC<RoundButtonProps> = ({ className, ...props }) => {
    return (
        <button className={classNames('round-button', className)} {...props}>
            <Icon name="down" />
        </button>
    );
};

export default RoundButton;
