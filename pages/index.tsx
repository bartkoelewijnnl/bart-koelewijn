import Badge from 'components/Badge';
import { Button } from 'components/button';
import Group from 'components/Group';
import IntroCta from 'components/IntroCta';
import Logo from 'components/Logo';
import Margin from 'components/Margin';
import Profile from 'components/Profile';
import { SectionAwaretrain, SectionCareer, SectionCycleCenter } from 'components/section';
import { H1, Paragraph } from 'components/text';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Row, Col } from 'components/grid';
import styles from './Home.module.scss';

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Bart Koelewijn - Portfolio</title>
                <meta name="description" content="Front-end Developer met gevoel voor design" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.intro}>
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
            </div>
            <Container>
                <SectionAwaretrain variant="blue" lightVariant="lightBlue" title="Awaretrain" subtitle="Bewustwording creëren">
                    <Paragraph>
                        Awaretrain is een adviesbureau dat bewustwording realiseert op het gebied van informatiebeveiliging, cybersecurity
                        en privacy. Awaretrain wilde meer dan een visitekaartje achterlaten bij bedrijven, en zo kwamen zij tot het idee
                        voor een app. In de app zijn cyber security en privacy belangrijke onderwerpen, die aan de orde van de dag zijn op
                        de werkvloer. In de app krijgen gebruikers dan ook vragen over security in bedrijfsgerelateerd sfeer.
                    </Paragraph>
                    <Paragraph>
                        De app is geschreven met React Native. Ik heb elk front-end scherm opgezet vanuit een (Adobe XD) ontwerp bestand. De
                        leukste uitdaging was het uitwerken van een graadmeter op het score scherm. Dit heb ik gedaan met SVG en &apos;React
                        Native Animated&apos;.
                    </Paragraph>
                    <Paragraph isItalic>Denk jij de hoogste score te halen, test je kennis hiernaast of download de app.</Paragraph>
                    <Margin bottom={7}>
                        <Group>
                            <Badge title="SVG" icon="svg" color="blue" lightColor="lightBlue" />
                            <Badge title="Formik" icon="formik" color="blue" lightColor="lightBlue" />
                            <Badge title="Animatie" icon="transition" color="blue" lightColor="lightBlue" />
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
                    badges={[
                        { icon: 'redux', title: 'Redux' },
                        { icon: 'slider', title: 'Configurator' },
                        { icon: 'svg', title: 'CSS Masking' }
                    ]}
                    variant="green"
                    lightVariant="lightGreen"
                    title="Cycle Center"
                >
                    <Paragraph>
                        Cycle Center 53-11 is een tweewielerwinkel met 40 jaar ervaring in fietsverkoop, -ontwerp en spuiten. Deze expertise
                        brengen ze online over met een Bikebuilder. De tool geeft de klant inzicht in talloze mogelijkheden. Als de klant
                        online een beeld heeft gekregen wat hij/zij (ongeveer) wil, kan deze naar de winkel voor verder advies.
                    </Paragraph>
                    <Paragraph>
                        De app is geschreven met React in combinatie van Redux. De Bikebuilder/configurator heb ik gebouwd op een API
                        geschreven door collega&#8217;s. De vele opties en afhankelijkheden zorgde voor een leuke uitdaging en een resultaat
                        waar ik trots op ben.
                    </Paragraph>
                    <Paragraph isItalic>Welke kleur fiets kies jij?</Paragraph>
                    <Button
                        href="https://configurator.apexbikes.cc/"
                        target="_blank"
                        icon="link"
                        aria-label="Bezoek de Cycle Center website"
                    >
                        Bezoek Cycle Center
                    </Button>
                </SectionCycleCenter>
                <SectionCareer title="Carrière" />
            </Container>
        </>
    );
};

export default Home;
