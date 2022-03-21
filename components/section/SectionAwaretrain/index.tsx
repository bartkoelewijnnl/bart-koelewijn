import Icon from 'components/Icon';
import { Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { Col } from 'react-grid-system';
import { SectionProps } from '..';
import Answer from './components/Answer';
import Gauge from './components/Gauge';
import Logo from './components/Logo';
import {
    Phone,
    Card,
    Website,
    PhoneWrapper,
    Question,
    Top,
    Bottom,
    Button,
    Answers,
    Section,
    Explanation,
    ExplanationTitle,
    ExplanationText,
    Gif,
    PhoneCardWrapper
} from './styles';
import { AnimatePresence, LayoutGroup, Variants } from 'framer-motion';
import { Element } from 'react-scroll';

interface Answer {
    id: string;
    answer: string;
}

interface QA {
    url?: string;
    question: string;
    answers: [Answer, Answer, Answer];
    correctAnswer: string;
    givenAnswer?: string;
    isAnswered?: boolean;
    isExplained?: boolean;
    explanation: string;
}

const qas: QA[] = [
    {
        url: 'https://bartkoelewijn.nl/',
        question: 'Is de bovenstaande URL veilig?',
        explanation:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        answers: [
            {
                id: '1-1',
                answer: 'Ja, want de URL bevat https://.'
            },
            {
                id: '1-2',
                answer: 'Nee, want WWW staat niet in de URL.'
            },
            {
                id: '1-3',
                answer: 'Ja, want de URL bevat https://.'
            }
        ],
        correctAnswer: '1-1'
    },
    {
        question: 'Wat is geen datalek?',
        explanation:
            'We spreken niet direct van een datalek als je je computersysteem vergeet te vergrendelen. We raden wel aan dit altijd te doen, ook ak verkaat je je werkplek maar voor even. Gebruik hiervoor de toetscombinatie Windows+L (Windows) of control+command+Q (Mac).',
        answers: [
            {
                id: '2-1',
                answer: 'Je bent een USB-stick met klantbestanden verloren.'
            },
            {
                id: '2-2',
                answer: 'Je bent je zakelijke telefoon met klantcontacten en e-mails kwijtgeraakt.'
            },
            {
                id: '2-3',
                answer: 'Je hebt je computersysteem niet vergrendeld toen je koffie ging halen.'
            }
        ],
        correctAnswer: '2-3'
    }
];

export interface SectionAwaretrainValues {
    qas: QA[];
}

const initialValues: SectionAwaretrainValues = { qas };

interface SectionAwaretrainProps extends SectionProps {}

const renderAnswer = (qa: QA, qaIndex: number, answerIndex: number) => {
    return (
        <Answer
            id={qa.answers[answerIndex].id}
            name={`qas.${qaIndex}.givenAnswer`}
            isAnswered={qa.isAnswered}
            correctAnswer={qa.correctAnswer}
        >
            {qa.answers[answerIndex].answer}
        </Answer>
    );
};

// Motion.
const websiteVariants: Variants = {
    initial: { opacity: 0, y: -16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 16 }
};

const gifVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

const SectionAwaretrain: FC<SectionAwaretrainProps> = ({ children, ...card }) => {
    const handleOnSubmit = (values: SectionAwaretrainValues, helpers: FormikHelpers<SectionAwaretrainValues>) => {
        const qaIndex = values.qas.findIndex((qa) => !qa.isAnswered || !qa.isExplained);

        // When the quiz is finished, there is nothing to submit.
        if (qaIndex === -1) {
            return helpers.resetForm({ values: { qas } });
        }

        const qa = values.qas[qaIndex];

        // When the answer is given.
        if (qa.givenAnswer && !qa.isAnswered) {
            helpers.setFieldValue(`qas.${qaIndex}.isAnswered`, true);
        }

        // When the explanation is given.
        if (qa.givenAnswer && qa.isAnswered && !qa.isExplained) {
            helpers.setFieldValue(`qas.${qaIndex}.isExplained`, true);
        }
    };

    return (
        <Element name="awaretrain">
            <Section>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={5}
                    xl={4}
                    offset={{
                        md: 0,
                        lg: 1,
                        xl: 1
                    }}
                >
                    <PhoneCardWrapper>
                        <Card {...card} />
                        <PhoneWrapper>
                            <AnimatePresence>
                                <LayoutGroup>
                                    <Formik<SectionAwaretrainValues> initialValues={initialValues} onSubmit={handleOnSubmit}>
                                        {({ values }) => {
                                            // Find the first QA that is not answered.
                                            const qaIndex = values.qas.findIndex((qa) => !qa.isAnswered || !qa.isExplained);

                                            // When the quiz is finished.
                                            if (qaIndex === -1) {
                                                const correctAnswers = values.qas.reduce(
                                                    (a, c) => a + +(c.givenAnswer === c.correctAnswer),
                                                    0
                                                );

                                                return (
                                                    <Form>
                                                        <Phone>
                                                            <Top layoutId="top" layout>
                                                                <Logo />
                                                                <Gif
                                                                    layout
                                                                    variants={gifVariants}
                                                                    initial="initial"
                                                                    animate="animate"
                                                                    exit="exit"
                                                                    correctAnswers={correctAnswers}
                                                                />
                                                                <Gauge value={correctAnswers} max={values.qas.length} />
                                                            </Top>
                                                            <Bottom layoutId="bottom" layout>
                                                                <Button layout type="submit">
                                                                    Opnieuw
                                                                    <Icon name="again" color="white" />
                                                                </Button>
                                                            </Bottom>
                                                        </Phone>
                                                    </Form>
                                                );
                                            }

                                            const qa = values.qas[qaIndex];

                                            return (
                                                <Form>
                                                    <Phone>
                                                        <Top layoutId="top" layout>
                                                            <Logo />
                                                            {qa.url && (
                                                                <Website
                                                                    layout
                                                                    initial="initial"
                                                                    animate="animate"
                                                                    exit="exit"
                                                                    variants={websiteVariants}
                                                                    value="https://bartkoelewijn.nl/"
                                                                    disabled
                                                                />
                                                            )}
                                                            <Question layout="position">{qa.question}</Question>
                                                            <Answers layout isFirst>
                                                                {renderAnswer(qa, qaIndex, 0)}
                                                            </Answers>
                                                        </Top>
                                                        <Bottom layoutId="bottom" layout>
                                                            <Answers layout>
                                                                {renderAnswer(qa, qaIndex, 1)}
                                                                {renderAnswer(qa, qaIndex, 2)}
                                                            </Answers>
                                                            {qa.isAnswered && !qa.isExplained && (
                                                                <Explanation layout>
                                                                    <ExplanationTitle>Uitleg</ExplanationTitle>
                                                                    <ExplanationText initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                                        {qa.explanation}
                                                                    </ExplanationText>
                                                                </Explanation>
                                                            )}
                                                            <Button layout type="submit">
                                                                {!qa.isAnswered ? 'Beantwoorden' : 'Afronden'}
                                                                <Icon name="right" color="white" />
                                                            </Button>
                                                        </Bottom>
                                                    </Phone>
                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                </LayoutGroup>
                            </AnimatePresence>
                        </PhoneWrapper>
                    </PhoneCardWrapper>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    xl={4}
                    offset={{
                        md: 1,
                        lg: 1,
                        xl: 1
                    }}
                >
                    {children}
                </Col>
            </Section>
        </Element>
    );
};

export default SectionAwaretrain;
