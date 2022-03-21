import { FC } from 'react';
import Image from 'next/image';
import { Picture, ImageWrapper } from './styles';
import Skills from 'components/Skills';
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
