import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Web Developer with a passion for creating beautiful, escalatable and maintainable websites.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/juan-coronado-05874a189/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;