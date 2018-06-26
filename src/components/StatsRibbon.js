import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box, Button } from 'bloomer'

export default ({content}) => {
return <Hero isSize="small" isColor="primary">
        <HeroBody>
        <Container>
            <Columns isCentered> 
                <Column >
                328 attendees
                </Column>
                <Column>
                    450 club mates
                </Column>
                <Column>
                    3 best speakers
                </Column>
            </Columns>
        </Container>
        </HeroBody>
</Hero>
}
