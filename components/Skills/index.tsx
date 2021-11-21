import Skill, { SkillProps } from 'components/Skill';
import { FC } from 'react';
import { Skills as Wrapper } from './styles';
import { motion, Variants } from 'framer-motion';

interface SkillsProps {}

const container: Variants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { delayChildren: 0.2, staggerChildren: 0.2 } }
};

const variants: Variants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

// prettier-ignore
const skills: SkillProps[] = [
    { icon: 'react' },
    { icon: 'flutter' },
    { icon: 'vue' },
    { icon: 'git' }
];

const Skills: FC<SkillsProps> = () => {
    return (
        <>
            <Wrapper key="skills" variants={container} initial="hidden" animate="visible">
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={variants}>
                        <Skill {...skill} />
                    </motion.div>
                ))}
            </Wrapper>
        </>
    );
};

export default Skills;
