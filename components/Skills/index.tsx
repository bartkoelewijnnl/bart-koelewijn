import { FC } from 'react';
import { Skills as Wrapper, Skill } from './styles';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
    return (
        <Wrapper>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </Wrapper>
    );
};

export default Skills;
