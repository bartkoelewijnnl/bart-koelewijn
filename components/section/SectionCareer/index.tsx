import { Button } from 'components/button';
import Margin from 'components/Margin';
import { H2 } from 'components/text';
import { FC } from 'react';
import Item from './components/Item';
import Lines from './components/Lines';
import styles from './SectionCareer.module.scss';
import { Element } from 'react-scroll';

interface SectionCareerProps {
    title: string;
}

const MAX_YEAR = 2024;
const MIN_YEAR = 2017;

const SectionCareer: FC<SectionCareerProps> = ({ title }) => {
    // Render.
    return (
        <>
            <H2>{title}</H2>
            <Element id="ef2" name="ef2">
                <div className={styles.phone}>
                    <div className={styles.content}>
                        <Item title="Senior Front-end developer" company="EF2" height={2} width={1} columnStart={1} active />
                        <Item title="Front-end developer" company="Bluenotion" height={3} width={1} columnStart={1} />
                        <Item title="HBO-ICT" company="Hogeschool van Arnhem en Nijmegen (HAN)" height={4} rowStart={5} columnStart={2} />
                        <Item title="Front-end developer" company="Sportunity" height={2} columnStart={1} />
                        <Item title="Junior tester" company="Kodision" height={1} columnStart={1} />
                        <Lines minYear={MIN_YEAR} maxYear={MAX_YEAR} />
                    </div>
                    <Margin bottom={2}>
                        <Button as="a" href="https://www.linkedin.com/in/bart-koelewijn-ba1424b7/" target="_blank" icon="link" isWhite>
                            LinkedIn
                        </Button>
                    </Margin>
                    <Button as="a" href="mailto:bartkoelewijnnl@gmail.com" icon="mail" isOutline isWhite>
                        bartkoelewijnnl@gmail.com
                    </Button>
                </div>
            </Element>
        </>
    );
};

export default SectionCareer;
