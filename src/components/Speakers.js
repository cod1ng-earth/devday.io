import React from 'react'
import { Hero, HeroBody, Image, Link, Container, Content, Columns, Column, Box } from 'bloomer'
import { DateTime } from 'luxon';

const Speakers = ({speakers}) => {
  
  const speakerCols = speakers.filter( s => { return s.node.name!=null } ).map(speaker => {
    const key = 's-' + speaker.node.id;
    return <Column key={key} isSize='1/4' hasTextAlign="centered">
      <Image isSize="96x96" isDisplay="inline-block" src={speaker.node.image.resolutions.src} />
      <p>{speaker.node.name}</p>
       {speaker.node.position}
    </Column>
  });
  
  return <Hero isSize="medium" isColor="primary">
        <HeroBody>
          <Container>
              <h2 className="is-size-2">Speakers</h2>
              <Columns isMultiline>
              {speakerCols}
              </Columns>
          </Container>
        </HeroBody>
  </Hero>
}


  

  
export default Speakers


