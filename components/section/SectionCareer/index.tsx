import { H2 } from 'components/text';
import { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import Item from './components/Item';
import Lines from './components/Lines';
import { Content, Phone, Left, Right } from './styles';

interface SectionCareerProps {
    title: string;
}

const MAX_YEAR = 2022;
const MIN_YEAR = 2016;

const SectionCareer: FC<SectionCareerProps> = ({ title }) => {
    // Render.

    return (
        <>
            <H2>{title}</H2>
            <Row>
                <Col md={4} offset={{ md: 4 }}>
                    <Phone>
                        <Content>
                            <Left>
                                <Item height={1} />
                                <Item height={1} />
                            </Left>
                            <Right>
                                <Item height={1} />
                            </Right>
                            <Lines minYear={MIN_YEAR} maxYear={MAX_YEAR} />
                        </Content>
                    </Phone>
                </Col>
            </Row>
        </>
    );
};

export default SectionCareer;
