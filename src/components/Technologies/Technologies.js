import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FiFigma, FiDatabase } from "react-icons/fi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionDivider />
    <br />
    <SectionText>
      He estado trabajando con las siguientes tecnologías: HTML, CSS, Javascript, ReactJs, Ruby on Rails, Bootstrap, GIT y más.
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, Javascript, ReactJs y Bootstrap.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJs, Ruby y Bases de Datos (Postgresql, MongoDB).
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI-UX Designer</ListTitle>
          <ListParagraph>
            Figma y Adobe XD.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
