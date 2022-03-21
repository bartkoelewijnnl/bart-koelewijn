import { Button } from 'components/button';
import Margin from 'components/Margin';
import { H2 } from 'components/text';
import { FC } from 'react';
import Item from './components/Item';
import Lines from './components/Lines';
import { Content, Phone } from './styles';

interface SectionCareerProps {
    title: string;
}

const MAX_YEAR = 2022;
const MIN_YEAR = 2017;

const SectionCareer: FC<SectionCareerProps> = ({ title, children }) => {
    // Render.

    return (
        <>
            <H2>{title}</H2>
            <Phone>
                <Content>
                    <Item title="Front-end developer" company="Bluenotion" height={3} width={1} columnStart={1} />
                    <Item title="HBO-ICT" company="Hogeschool van Arnhem en Nijmegen (HAN)" height={4} rowStart={3} columnStart={2} />
                    <Item title="Front-end developer" company="Sportunity" height={2} columnStart={1} />
                    <Item title="Junior tester" company="Kodision" height={1} columnStart={1} />
                    <Lines minYear={MIN_YEAR} maxYear={MAX_YEAR} />
                </Content>
                <Margin bottom={1}>
                    <Button icon="link" isWhite>
                        LinkedIn
                    </Button>
                </Margin>
                <Button href="mailto:bartkoelewijnnl@gmail.com" icon="mail" isOutline isWhite>
                    bartkoelewijnnl@gmail.com
                </Button>
            </Phone>
        </>
    );
};

export default SectionCareer;
