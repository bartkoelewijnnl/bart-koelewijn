import Icon from 'components/Icon';
import { Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { Col, Row } from 'components/grid';
import { SectionProps } from '..';
import Answer from './components/Answer';
import Gauge from './components/Gauge';
import Logo from './components/Logo';
import { Card, PhoneCardWrapper } from './styles';
import { AnimatePresence, LayoutGroup, Variants } from 'framer-motion';
import { Element } from 'react-scroll';
import styles from './SectionAwaretrain.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

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
        // url: 'https://bartkoelewijn.nl/',
        question: 'Wie is binnen jouw organisatie verantwoordelijk voor informatiebeveiliging',
        explanation:
            'Alle medewerkers zijn verantwoordelijk voor informatiebeveiliging binnen jouw organisatie. Deze verantwoordelijkheid ligt niet bij één specifieke afdeling.',
        answers: [
            {
                id: '1-1',
                answer: 'Alle medewerkers.'
            },
            {
                id: '1-2',
                answer: 'De ICT-afdeling.'
            },
            {
                id: '1-3',
                answer: 'De beveiliging.'
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
        <Element id="awaretrain" name="awaretrain">
            <Row className={styles.section}>
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
                        <div className="position--relative">
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
                                                        <div className={classNames('phone', styles.phone)}>
                                                            <motion.div layoutId="top" className={styles['phone__top']} layout>
                                                                <Logo />
                                                                <motion.div
                                                                    className={classNames(styles['phone__top__gif'], {
                                                                        [styles['phone__top__gif--mediocre']]: correctAnswers === 1,
                                                                        [styles['phone__top__gif--perfect']]: correctAnswers === 2
                                                                    })}
                                                                    layout
                                                                    variants={gifVariants}
                                                                    initial="initial"
                                                                    animate="animate"
                                                                    exit="exit"
                                                                />
                                                                <Gauge value={correctAnswers} max={values.qas.length} />
                                                            </motion.div>
                                                            <motion.div className={styles['phone__bottom']} layoutId="bottom" layout>
                                                                <motion.button className={styles.button} layout type="submit">
                                                                    Opnieuw
                                                                    <Icon name="again" color="white" />
                                                                </motion.button>
                                                            </motion.div>
                                                        </div>
                                                    </Form>
                                                );
                                            }

                                            const qa = values.qas[qaIndex];

                                            return (
                                                <Form>
                                                    <div className={classNames('phone', styles.phone)}>
                                                        <motion.div layoutId="top" className={styles['phone__top']} layout>
                                                            <Logo />
                                                            {qa.url && (
                                                                <motion.input
                                                                    className={styles['phone__top__website']}
                                                                    layout
                                                                    initial="initial"
                                                                    animate="animate"
                                                                    exit="exit"
                                                                    variants={websiteVariants}
                                                                    value="https://bartkoelewijn.nl/"
                                                                    disabled
                                                                />
                                                            )}
                                                            <motion.span className={styles['phone__top__question']} layout="position">
                                                                {qa.question}
                                                            </motion.span>
                                                            <motion.div
                                                                className={classNames(
                                                                    styles['phone__answers'],
                                                                    styles['phone__answers--first']
                                                                )}
                                                                layout
                                                            >
                                                                {renderAnswer(qa, qaIndex, 0)}
                                                            </motion.div>
                                                        </motion.div>
                                                        <motion.div className={styles['phone__bottom']} layoutId="bottom" layout>
                                                            <motion.div className={styles['phone__answers']} layout>
                                                                {renderAnswer(qa, qaIndex, 1)}
                                                                {renderAnswer(qa, qaIndex, 2)}
                                                            </motion.div>
                                                            {qa.isAnswered && !qa.isExplained && (
                                                                <motion.div className={styles['phone__explanation']} layout>
                                                                    <motion.span className={styles['phone__explanation__title']}>
                                                                        Uitleg
                                                                    </motion.span>
                                                                    <motion.span
                                                                        className={styles['phone__explanation__text']}
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                    >
                                                                        {qa.explanation}
                                                                    </motion.span>
                                                                </motion.div>
                                                            )}
                                                            <motion.button className={styles.button} layout type="submit">
                                                                {!qa.isAnswered ? 'Beantwoorden' : 'Afronden'}
                                                                <Icon name="right" color="white" />
                                                            </motion.button>
                                                        </motion.div>
                                                    </div>
                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                </LayoutGroup>
                            </AnimatePresence>
                        </div>
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
            </Row>
        </Element>
    );
};

export default SectionAwaretrain;
