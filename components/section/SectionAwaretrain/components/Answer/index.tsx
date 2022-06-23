import { FC } from 'react';
import Icon from 'components/Icon';
import { useField } from 'formik';
// @ts-ignore
import styles, { green, red } from './Answer.module.scss';
import classNames from 'classnames';

interface AnswerProps {
    id: string;
    name: string;
    correctAnswer: string;
    isAnswered?: boolean;
}

const Answer: FC<AnswerProps> = ({ children, name, id, isAnswered, correctAnswer }) => {
    const [field, _, helpers] = useField<string>(name);

    // Methods.
    const handleOnChange = () => {
        if (isAnswered) {
            return;
        }

        helpers.setValue(id);
    };

    // Render.
    const checked = id === field.value;
    const showCorrect = isAnswered && id === correctAnswer;
    const showIncorrect = isAnswered && id === field.value && !showCorrect;

    return (
        <label
            className={classNames(styles.answer, {
                [styles['answer--correct']]: showCorrect,
                [styles['answer--incorrect']]: showIncorrect
            })}
        >
            {!isAnswered ? (
                <div className={styles['answer__radio-wrapper']}>
                    <input type="radio" onChange={handleOnChange} checked={checked} />
                    <div className={styles['answer__radio-wrapper__radio']} />
                </div>
            ) : (
                <div className={styles['answer__radio-wrapper']}>
                    {showCorrect && <Icon size={1} name="done" fill={green} />}
                    {showIncorrect && <Icon size={1} name="close" fill={red} />}
                </div>
            )}
            <span
                className={classNames(styles['answer__text'], {
                    [styles['answer__text--correct']]: showCorrect,
                    [styles['answer__text--incorrect']]: showIncorrect
                })}
            >
                {children}
            </span>
        </label>
    );
};

export default Answer;
