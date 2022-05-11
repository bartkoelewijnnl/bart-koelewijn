import Skill, { SkillProps } from 'components/Skill';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Skills.module.scss';

interface SkillsProps {}

// Motion.
const containerVariants: Variants = {
    animate: { transition: { delayChildren: 0.2, staggerChildren: 0.2 } }
};

const skillVariants: Variants = {
    initial: { y: 16, opacity: 0 },
    animate: { y: 0, opacity: 1 }
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
        <motion.div className={styles.skills} key="skills" variants={containerVariants} initial="initial" whileInView="animate">
            {skills.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                    <Skill {...skill} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Skills;
