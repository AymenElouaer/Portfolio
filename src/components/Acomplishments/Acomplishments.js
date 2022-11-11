import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Android Development',text: '' },
 // { number: 1000, text: 'Students', },
  //{ number: 1900, text: 'Github Followers', },
  //{ number: 5000, text: 'Github Stars', }
];
const click = () => {
  window.open('https://files.fm/u/xjufxhzrm#/view/dxt9tb4p5', '_blank')
}
const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} onClick={(click)}>
          <BoxNum >{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
