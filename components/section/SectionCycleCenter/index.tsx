import Badge, { BadgeProps } from 'components/Badge';
import { Button } from 'components/button/RoundButton/styles';
import Card from 'components/Card';
import Group from 'components/Group';
import Margin from 'components/Margin';
import { FC, useState } from 'react';
import { Col, Hidden, Row, useScreenClass } from 'react-grid-system';
import { SectionProps } from '..';
import { Content, Background, Side, Category, BikeContent } from './styles';
import ColorPicker, { COLORS } from './components/ColorPicker';
import Bike from './components/Bike';
import FinishPicker from './components/FinishPicker';

interface SectionCycleCenterProps extends SectionProps {
    badges: Omit<BadgeProps, 'color' | 'lightColor'>[];
}

const SectionCycleCenter: FC<SectionCycleCenterProps> = ({ children, badges, ...card }) => {
    const screenClass = useScreenClass();
    const [color, setColor] = useState<string>(COLORS[0]);
    const [isGlossy, setIsGlossy] = useState<boolean>(true);

    return (
        <Margin bottom={7.5}>
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
                    {/* TODO content is used twice, make flex layout component */}
                    <Content>
                        <Hidden xs sm>
                            <Margin right={4}>
                                <Group>
                                    {badges.map((badge, index) => (
                                        <Badge key={index} {...badge} color={card.variant} lightColor={card.lightVariant} />
                                    ))}
                                </Group>
                            </Margin>
                        </Hidden>

                        <Card {...card} />
                    </Content>
                    <Background>
                        <BikeContent>
                            <Bike color={color} isGlossy={isGlossy} />
                            <Side>
                                <Category>Ontwerp</Category>
                                <ColorPicker color={color} setColor={setColor} />
                                <Category>Afwerking</Category>
                                <FinishPicker isGlossy={isGlossy} setIsGlossy={setIsGlossy} />
                            </Side>
                        </BikeContent>
                    </Background>
                </Col>
            </Row>
        </Margin>
    );
};

export default SectionCycleCenter;
