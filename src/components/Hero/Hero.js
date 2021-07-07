import React from 'react';

import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Oh, hello there. <br />
                I'm Juli. Nice to meet you!
            </SectionTitle>
            <SectionText>
                I'm a full-stack software engineer with a passion for learning
                &#129504;, diving down rabbit holes &#128007;&#128371;, and
                astronomy &#128301;. Oh, and I have a penchant for{' '}
                <del>terrible</del> awesome jokes!
            </SectionText>
            <Button onClick={() => (window.location = '#contact')}>
                Let's Chat
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
