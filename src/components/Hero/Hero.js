import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        Mi Portfolio Personal
      </SectionTitle>
      <SectionText>
        Soy un Desarrollador Web que gusta de crear páginas web utiles, escalables y mantenibles.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/juan-coronado-05874a189/'}>Leer más</Button>
    </LeftSection>
  </Section>
);

export default Hero;