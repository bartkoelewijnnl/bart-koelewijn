import Icon from 'components/Icon';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <motion.div className="mb--2" layout>
            <Icon name="awaretrain" size={2} color="white" />
        </motion.div>
    );
};

export default Logo;
