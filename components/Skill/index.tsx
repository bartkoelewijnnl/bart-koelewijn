import Icon, { Icons } from 'components/Icon';
import { FC } from 'react';
import styles from './Skill.module.scss';

export interface SkillProps {
    icon: keyof Icons;
}

const Skill: FC<SkillProps> = ({ icon, ...props }) => {
    return (
        <div className={styles.skill} {...props}>
            <Icon name={icon} />
        </div>
    );
};

export default Skill;
