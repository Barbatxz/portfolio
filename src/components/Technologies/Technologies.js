import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FiFigma, FiDatabase } from "react-icons/fi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider />
    <br />
    <SectionText>
      I've been working with the following technologies: ReactJs, Firebase, Ruby on Rails, Javascript, HTML, CSS, and more.
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            ReactJs, Javascript, HTML, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Ruby, NodeJs and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UX-UI</ListTitle>
          <ListParagraph>
            XD, Figma, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
