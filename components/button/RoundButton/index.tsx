import classNames from 'classnames';
import Icon from 'components/Icon';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, FC } from 'react';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

interface RoundButtonProps extends Attributes {
    as?: ElementType;
}

const RoundButton: FC<RoundButtonProps> = ({ className, as: Tag = 'button', ...props }) => {
    return (
        <Tag className={classNames('round-button', className)} {...props}>
            <Icon name="down" />
        </Tag>
    );
};

export default RoundButton;
