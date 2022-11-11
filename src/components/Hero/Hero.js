import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>This Is Aymen Elouaer, a Software Engineer Student</SectionText>
      <Button onClick={() => window.open('https://files.fm/u/4wvcpbruj#/view/py3jg6443', '_blank')}>My Resume</Button>
    </LeftSection>

  </section>
);

export default Hero;