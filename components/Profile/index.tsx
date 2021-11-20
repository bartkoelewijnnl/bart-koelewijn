import Skills from 'components/Skills';
import { FC } from 'react';
import { Picture, Image } from './styles';

import ProfilePicture from 'public/images/profile.jpg';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    return (
        <Picture>
            <Image src={ProfilePicture} placeholder="blur" priority alt="Picture of the author" />
            <Skills />
        </Picture>
    );
};

export default Profile;
