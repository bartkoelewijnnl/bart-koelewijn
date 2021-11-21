import Skills from 'components/Skills';
import { FC } from 'react';
import { Picture, ImageWrapper } from './styles';
import Image from 'next/image';

import ProfilePicture from 'public/images/profile.jpg';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    return (
        <Picture>
            <ImageWrapper>
                <Image src={ProfilePicture} placeholder="blur" priority alt="Picture of the author" />
            </ImageWrapper>
            <Skills />
        </Picture>
    );
};

export default Profile;
