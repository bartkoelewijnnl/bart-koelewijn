import { FC } from 'react';
import Image from 'next/image';
import Skills from 'components/Skills';
import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.image}>
                <Image src='images/profile.jpg' placeholder="blur" priority alt="Picture of the author" />
            </div>
            <Skills />
        </div>
    );
};

export default Profile;
