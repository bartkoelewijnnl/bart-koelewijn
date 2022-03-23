import Badge from 'components/Badge';
import { Button } from 'components/button';
import { FormSwitch } from 'components/form';
import Group from 'components/Group';
import Intro from 'components/Intro';
import IntroCta from 'components/IntroCta';
import Logo from 'components/Logo';
import Margin from 'components/Margin';
import Profile from 'components/Profile';
import { SectionAwaretrain, SectionCareer, SectionCycleCenter } from 'components/section';
import { H1, H2, Paragraph } from 'components/text';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useThemeContext } from 'providers/ThemeProvider';
import { Container, Row, Col } from 'react-grid-system';

const Home: NextPage = () => {
    const { isDark, setIsDark } = useThemeContext();

    return (
        <>
            <Head>
                <title>Bart Koelewijn - Portfolio</title>
                <meta name="description" content="Front-end Developer met gevoel voor design" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <FormSwitch checked={isDark} onChange={(event) => setIsDark(event.target.checked)} /> */}
            <Intro>
                <Container>
                    <Row>
                        <Col
                            md={4}
                            lg={3}
                            offset={{
                                md: 1,
                                lg: 2
                            }}
                        >
                            <Profile />
                        </Col>
                        <Col
                            md={5}
                            lg={5}
                            offset={{
                                md: 2,
                                lg: 2
                            }}
                        >
                            <Logo />
                            <H1>Bart Koelewijn</H1>
                            <Paragraph noMargin>
                                Hoi, ik ben Bart en als JavaScript-ontwikkelaar maak ik verschillende applicaties. Ik word enthousiast van
                                een mooi ontwerp wat ik ‘pixel perfect’ mag uitwerken. Het overleggen met UI/UX’ers en het nadenken over
                                animaties doe ik graag.
                            </Paragraph>
                            <IntroCta />
                        </Col>
                    </Row>
                </Container>
            </Intro>
            <Container>
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={4}
                        offset={{
                            md: 7,
                            lg: 7,
                            xl: 6
                        }}
                    >
                        <H2>Portfolio</H2>
                    </Col>
                </Row>
                <SectionAwaretrain variant="blue" lightVariant="lightBlue" title="Awaretrain" subtitle="Bewustwording creëren">
                    <Paragraph>
                        Awaretrain is een adviesbureau dat bewustwording realiseert op het gebied van informatiebeveiliging, cybersecurity
                        en privacy. Awaretrain wilde meer dan een visitekaartje achterlaten bij bedrijven, en zo kwamen zij tot het idee
                        voor een app. In de app zijn cyber security en privacy belangrijke onderwerpen, die aan de orde van de dag zijn op
                        de werkvloer. In de app krijgen gebruikers dan ook vragen over security in bedrijfsgerelateerd sfeer.
                    </Paragraph>
                    <Paragraph>
                        De app is geschreven in React Native. Ik heb elk front-end scherm opgezet vanuit een (Adobe XD) ontwerp bestand. De
                        leukste uitdaging was het uitwerken van een graadmeter op het score scherm. Dit heb ik gedaan met SVG en &apos;React
                        Native Animated&apos;.
                    </Paragraph>
                    <Paragraph isItalic>Denk jij de hoogste score te halen, test je kennis hiernaast of download de app.</Paragraph>
                    <Margin bottom={3.5}>
                        <Group>
                            <Badge icon="svg" color="blue" lightColor="lightBlue" />
                            <Badge icon="react" color="blue" lightColor="lightBlue" />
                            <Badge icon="transition" color="blue" lightColor="lightBlue" />
                        </Group>
                    </Margin>
                    <Group isLarge>
                        <Button
                            icon="apple"
                            href="https://apps.apple.com/nl/app/awaretrain-security-awareness/id1527995399/"
                            target="_blank"
                            aria-label="Open iPhone app"
                        >
                            iPhone
                        </Button>
                        <Button
                            icon="android"
                            href="https://play.google.com/store/apps/details?id=nl.bluenotion.awaretrain&hl=nl/"
                            target="_blank"
                            aria-label="Open Android app"
                            isOutline
                        >
                            Android
                        </Button>
                    </Group>
                </SectionAwaretrain>
                <SectionCycleCenter
                    subtitle="Customized APEX racefietsen"
                    badges={[{ icon: 'svg' }, { icon: 'svg' }, { icon: 'svg' }]}
                    variant="green"
                    lightVariant="lightGreen"
                    title="Cycle Center"
                >
                    <Paragraph>
                        Cycle Center 53-11 is een tweewielerwinkel met 40 jaar ervaring in fietsverkoop, -ontwerp en spuiten. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. In scelerisque pellentesque arcu, at ultrices nunc sodales in. Sed id
                        ex ut magna finibus accumsan et ut mauris. Curabitur non semper magna. Aliquam suscipit dui sit amet dui feugiat
                        finibus. Ut quis purus iaculis, tempus arcu sed, scelerisque ante. Etiam dui quam, accumsan et massa id, fringilla
                        viverra mauris. In eu leo et lorem cursus blandit eu ac augue.
                    </Paragraph>
                    <Button
                        href="https://configurator.apexbikes.cc/"
                        target="_blank"
                        icon="link"
                        aria-label="Bezoek de Cycle Center website"
                    >
                        Bezoek Cycle Center
                    </Button>
                </SectionCycleCenter>
                <SectionCareer title="Carrière">
                    <Paragraph>Een leuk idee, nieuwsgierig of gewoon een vraag?</Paragraph>
                </SectionCareer>
            </Container>
        </>
    );
};

export default Home;
