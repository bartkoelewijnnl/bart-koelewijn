import { FC } from 'react';
import styles from './Websites.module.scss';
import KiKa from '../KiKa';
import { Variants, motion } from 'framer-motion';
import TyresOn from '../TyresOn';

// Motion.
const variants: Variants = {
    animate: { transition: { delayChildren: 0.2, staggerChildren: 0.2 } }
};

const Websites = () => {
    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" className={styles.websites}>
            <KiKa />
            <TyresOn />
            {/* <More /> */}
        </motion.div>
    );
};

export default Websites;
