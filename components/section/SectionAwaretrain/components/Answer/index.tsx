import { FC } from 'react';
import { Answer as Wrapper } from './styles';

interface AnswerProps {}

const Answer: FC<AnswerProps> = ({ children }) => {
    return (
        <Wrapper>
            {/* <input type="radio" name="drone" value="huey" checked /> */}
            {children}
        </Wrapper>
    );
};

export default Answer;
