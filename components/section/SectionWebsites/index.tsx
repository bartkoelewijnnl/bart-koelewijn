import { FC } from 'react';
import { SectionProps } from '..';
import Margin from 'components/Margin';
import { Col, Row } from 'components/grid';
import Card from 'components/Card';
import Websites from './components/Websites';
import Badge, { BadgeProps } from 'components/Badge';
import styles from './SectionWebsites.module.scss';
import Group from 'components/Group';
import { Element } from 'react-scroll';

interface SectionWebsitesProps extends SectionProps {
    badges: Omit<BadgeProps, 'color' | 'lightColor'>[];
}

const SectionWebsites: FC<SectionWebsitesProps> = ({ badges, children, ...card }) => {
    return (
        <Element id="websites" name="websites">
            <Margin bottom={15}>
                <Row>
                    <Col xs={12} md={10} lg={7}>
                        <div className="d--flex">
                            <Card className={styles.card} {...card} />
                            <div className={styles.hidden}>
                                <Margin left={8}>
                                    <Group>
                                        {badges.map((badge, index) => (
                                            <Badge key={index} {...badge} color={card.variant} lightColor={card.lightVariant} />
                                        ))}
                                    </Group>
                                </Margin>
                            </div>
                        </div>
                        <Websites />
                    </Col>
                    <Col
                        offset={{
                            xs: 0,
                            md: 2,
                            lg: 1,
                            xl: 1
                        }}
                        xs={12}
                        lg={4}
                    >
                        {children}
                    </Col>
                </Row>
            </Margin>
        </Element>
    );
};

export default SectionWebsites;
