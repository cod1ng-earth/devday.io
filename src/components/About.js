import React from 'react'
import { Hero, HeroBody, Container, Content, Columns, Column, Box } from 'bloomer'

import sternwarte from '../img/sternwarte.jpg';

export default ({content}) => {
return <Hero isSize="medium" isColor="white" style={{backgroundImage: 'url(' + sternwarte +')', backgroundSize: 'cover'}}>
        <HeroBody>
            <Columns isCentered> 
                <Column isSize='1/2'>
                    
                </Column>
                <Column>
                    <Content>
                        <h2>{content.frontmatter.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </Content>
                </Column>
            </Columns>
        </HeroBody>
</Hero>
}
