import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box, Button } from 'bloomer'

export default ({content}) => {
return <Hero isSize="medium" isColor="primary">
        <HeroBody>
        <Container>
            <Columns isCentered> 
                <Column isSize='1/2'>
                    <Box>
                        <p>Berlin</p>
                        <Button isColor="danger" href="">Tickets for Berlin</Button>
                    </Box>
                    
                </Column>
                <Column>
                    <Box>
                    <p>Faro</p>
                    <Button isColor="danger" href="">Tickets for Faro</Button>
                    </Box>
                </Column>
            </Columns>
        </Container>
        </HeroBody>
</Hero>
}
