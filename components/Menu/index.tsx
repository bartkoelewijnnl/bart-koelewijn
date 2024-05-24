import { RoundButton } from 'components/button';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header>
            <button aria-expanded={open} aria-controls="menu" className={classNames('round-button', styles.toggle)}>
            </button>
            <nav id="menu"></nav>
        </header>
    );
};

export default Menu;
