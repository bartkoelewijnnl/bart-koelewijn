import { FC } from 'react';
import Image from 'next/image';
import Skills from 'components/Skills';
import ProfilePicture from 'public/images/profile.jpg';
import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.image}>
                <Image src={ProfilePicture} placeholder="blur" priority alt="Picture of the author" />
            </div>
            <Skills />
        </div>
    );
};

export default Profile;
