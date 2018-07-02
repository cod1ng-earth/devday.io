import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box, Button } from 'bloomer'

export default ({content}) => {
return <Hero isSize="small" isColor="primary" id="section-stats-ribbon">
        <HeroBody>
        <Container>
            <Columns > 
                <Column hasTextAlign="centered">
                <figure>260</figure> attendees
                </Column>
                <Column hasTextAlign="centered">
                    <figure>15</figure> speakers
                </Column>
                <Column hasTextAlign="centered">
                    <figure>10</figure> talks
                </Column>
                <Column hasTextAlign="centered">
                    <figure>3</figure> winners
                </Column>
            </Columns>
        </Container>
        </HeroBody>
</Hero>
}
