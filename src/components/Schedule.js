import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'

const Schedule = ({talks}) => {
  
  const talkLis = talks.map( ({ node }) => (
    <li key={node.id}>
    {node.slotTime}
    {node.title}
    </li> 
  ));
  
  return <Hero isSize="medium" isColor="success">
        <HeroBody>
          <Container>
              <h2 className="is-size-2">Schedule</h2>
              <h3 className="is-size-4">Saturday, 2017/05/26</h3>

              <ul>
                {talkLis}
              </ul>
          </Container>
        </HeroBody>
  </Hero>
}
  
export default Schedule


