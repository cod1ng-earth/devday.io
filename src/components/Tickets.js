import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'

export default ({content}) => {
return <Hero isSize="medium" isColor="primary">
        <HeroBody>
        <Container>
            <Columns isCentered> 
                <Column isSize='1/2'>
                    <Box>Berlin</Box>
                </Column>
                <Column>
                    <Box>Faro</Box>
                </Column>
            </Columns>
        </Container>
        </HeroBody>
</Hero>
}
