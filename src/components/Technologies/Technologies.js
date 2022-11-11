import React from 'react';
import { DiFirebase, DiReact, DiAndroid, DiMongodb } from 'react-icons/di';
import { FaBrain } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      i've worked with a range of Technologies...
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Symfony <br />
            SpringBoot
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            MongoDB <br />
            MySQL <br />
            Oracle <br />
            firsBase


          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Java <br />
            Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaBrain size={27} />
        <ListContainer>
          <ListTitle>Methodology</ListTitle>
          <ListParagraph>
            Agile <br />
            Scrum
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </section>
);

export default Technologies;
