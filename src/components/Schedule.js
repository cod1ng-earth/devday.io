import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'
//import { TimeLine } from './TimeLine';
import { DateTime } from 'luxon';
import _map from 'lodash.map';

const Talk = ({talk}) => (
  <div>
    {talk == null ? '' : typeof talk == 'string' ? talk :
      talk.title
    }
</div>
)

const Schedule = ({edges}) => {

  const timeLine = {
    '10:00': {
      'Berlin': 'Welcome / Warmup',
      'Faro': 'Welcome / Warmup'
    }
  }
  
  edges.forEach(edge => {
    const talk = edge.node;
    const slotTime = DateTime.fromISO(talk.slotTime).toLocaleString(DateTime.TIME_24_SIMPLE);
    if (!timeLine[slotTime])
      timeLine[slotTime] = {'Berlin': null, 'Faro': null};

    timeLine[slotTime][talk.location] = talk;
  });
  
  const zones = _map(timeLine, (talks, slot) => {
    const key = 't' + slot;

    return <Columns key={key}>
      <Column>{slot}</Column>
      <Column>    
        <Talk talk={talks['Berlin']} />
      </Column>
      <Column>    
        <Talk talk={talks['Faro']} />
      </Column>
    </Columns> 
  });
  
  return <Hero isSize="medium" isColor="dark">
        <HeroBody>
          <Container>
              <h2 className="is-size-2">Schedule</h2>
              <h3 className="is-size-4">Saturday, 2017/05/26</h3>
              <Columns>
                <Column>Slot</Column>
                <Column>Berlin</Column>
                <Column>Faro</Column>
              </Columns>
              {zones}
          </Container>
        </HeroBody>
  </Hero>
}
  
export default Schedule


