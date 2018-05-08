import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'
import { DateTime } from 'luxon';

const Speakers = ({speakers}) => {
  
  const speakerLis = speakers.map(speaker => {
    const key = 's-' + speaker.id;
    return <li key={key}>
      <strong>{speaker.name}</strong> <i>{speaker.position}</i>
    </li>
  });
  
  return <Hero isSize="medium" isColor="primary">
        <HeroBody>
          <Container>
              <h2 className="is-size-2">Speakers</h2>
              <ul>
                {speakerLis}
              </ul>
          </Container>
        </HeroBody>
  </Hero>
}


  

  
export default Speakers


