import { useTheme } from '@emotion/react';
import Icon from 'components/Icon';
import { useField } from 'formik';
import { rgba } from 'polished';
import { FC } from 'react';
import { Answer as Wrapper, Input, Radio, Text, RadioWrapper } from './styles';

interface AnswerProps {
    id: string;
    name: string;
    correctAnswer: string;
    isAnswered?: boolean;
}

const Answer: FC<AnswerProps> = ({ children, name, id, isAnswered, correctAnswer }) => {
    const [field, _, helpers] = useField<string>(name);
    const theme = useTheme();

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
    const textColor = showCorrect
        ? theme.colors.awaretrain.green
        : undefined || showIncorrect
        ? theme.colors.awaretrain.red
        : undefined || isAnswered
        ? rgba(theme.colors.awaretrain.dark, 0.2)
        : undefined;
    const background = showCorrect
        ? theme.colors.awaretrain.lightGreen
        : undefined || showIncorrect
        ? theme.colors.awaretrain.lightRed
        : undefined;

    return (
        <Wrapper background={background}>
            {!isAnswered ? (
                <RadioWrapper>
                    <Input type="radio" onChange={handleOnChange} checked={checked} />
                    <Radio />
                </RadioWrapper>
            ) : (
                <RadioWrapper>
                    {showCorrect && <Icon size={1} name="done" color="awaretrain.green" />}
                    {showIncorrect && <Icon size={1} name="close" color="awaretrain.red" />}
                </RadioWrapper>
            )}
            <Text color={textColor}>{children}</Text>
        </Wrapper>
    );
};

export default Answer;
