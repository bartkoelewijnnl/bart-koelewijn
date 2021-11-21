import { Children, FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { SectionProps } from '..';
import Answer from './components/Answer';
import { Phone, Card, Website, PhoneWrapper, Question, Top, Bottom, Button, Answers } from './styles';

interface SectionAwaretrainProps extends SectionProps {}

const SectionAwaretrain: FC<SectionAwaretrainProps> = ({ children, ...card }) => {
    return (
        <Row>
            <Col
                lg={5}
                xl={4}
                offset={{
                    lg: 1,
                    xl: 1
                }}
            >
                <Card {...card} />
                <PhoneWrapper>
                    <Phone>
                        <Top>
                            <Website value="https://bartkoelewijn.nl/" disabled />
                            <Question>Is de bovenstaande URL veilig?</Question>
                        </Top>
                        <Bottom>
                            <Answers>
                                <Answer>1</Answer>
                                <Answer>2</Answer>
                                <Answer>Nee, want WWW staat niet in de URL.</Answer>
                            </Answers>
                            <Button>asdf</Button>
                        </Bottom>
                    </Phone>
                </PhoneWrapper>
            </Col>
            <Col
                lg={5}
                xl={4}
                offset={{
                    lg: 1,
                    xl: 1
                }}
            >
                {children}
            </Col>
        </Row>
    );
};

export default SectionAwaretrain;
