import { FC } from 'react';
import styles from './More.module.scss';
import { Button } from 'components/button';

interface MoreProps {}

const More: FC<MoreProps> = () => {
    return (
        <div className={styles.more}>
            <Button className="mt--auto align-self--end" isWhite isOutline>
                Contact
            </Button>
        </div>
    );
};

export default More;
