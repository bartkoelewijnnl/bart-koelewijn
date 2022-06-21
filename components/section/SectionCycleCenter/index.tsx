import Badge, { BadgeProps } from 'components/Badge';
import Group from 'components/Group';
import Margin from 'components/Margin';
import { FC, useState } from 'react';
import { Col, Row } from 'components/grid';
import { SectionProps } from '..';
import { Content } from './styles';
import ColorPicker, { COLORS } from './components/ColorPicker';
import Bike from './components/Bike';
import FinishPicker from './components/FinishPicker';
import Card from 'components/Card';
import styles from './SectionCycleCenter.module.scss';

interface SectionCycleCenterProps extends SectionProps {
    badges: Omit<BadgeProps, 'color' | 'lightColor'>[];
}

const SectionCycleCenter: FC<SectionCycleCenterProps> = ({ children, badges, ...card }) => {
    const [color, setColor] = useState<string>(COLORS[1]);
    const [isGlossy, setIsGlossy] = useState<boolean>(true);

    return (
        <Margin bottom={15}>
            <Row>
                <Col
                    xs={12}
                    lg={4}
                    // @ts-ignore, order does exist.
                    order={{
                        xs: 2,
                        lg: 1
                    }}
                >
                    {children}
                </Col>
                <Col
                    xs={12}
                    md={10}
                    lg={7}
                    offset={{
                        xs: 0,
                        md: 2,
                        lg: 1,
                        xl: 1
                    }}
                    // @ts-ignore, order does exist.
                    order={{
                        xs: 1,
                        lg: 2
                    }}
                >
                    <Content>
                        <div className={styles.hidden}>
                            <Margin right={8}>
                                <Group>
                                    {badges.map((badge, index) => (
                                        <Badge key={index} {...badge} color={card.variant} lightColor={card.lightVariant} />
                                    ))}
                                </Group>
                            </Margin>
                        </div>
                        <Card className={styles.card} {...card} />
                    </Content>
                    <div className={styles['bike-wrapper__background']}>
                        <div className={styles['bike-wrapper__content']}>
                            <Bike color={color} isGlossy={isGlossy} />
                            <div>
                                <span className={styles.category}>Ontwerp</span>
                                <ColorPicker color={color} setColor={setColor} />
                                <span className={styles.category}>Afwerking</span>
                                <FinishPicker isGlossy={isGlossy} setIsGlossy={setIsGlossy} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Margin>
    );
};

export default SectionCycleCenter;
