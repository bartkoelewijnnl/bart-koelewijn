import Icon, { Icons } from 'components/Icon';
import { FC } from 'react';
import { Skill as Wrapper } from './styles';
import { Variants } from 'framer-motion';

export interface SkillProps {
    icon: keyof Icons;
    className?: string;
}

const Skill: FC<SkillProps> = ({ icon, className, ...props }) => {
    return (
        <Wrapper className={className} {...props}>
            <Icon name={icon} />
        </Wrapper>
    );
};

export default Skill;
