import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'

const Speakers = ({speakers}) => {
  
  const speakerLis = speakers.map( ({ node }) => {
    
    const key = 's-' + node.id;
    return <li key={key}>
      <strong>{node.speakerName}</strong> <i>{node.speakerPosition}</i>
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


