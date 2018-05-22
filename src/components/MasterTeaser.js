import React from 'react'
import {Hero, HeroHeader, HeroBody, HeroFooter, Container, Content, Columns, Column, Image } from 'bloomer'
import mainLogo from '../img/devday18-logo-berlin-faro.svg'

const MasterTeaser = ({content}) => {
  
  return <Hero id="section-master-teaser" isSize="medium" isColor="primary" className="bg-texture">
        <HeroBody>
          <Container>
            <Columns>
              <Column>
                <Image src={mainLogo} />
              </Column>
              <Column>
              <Content>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Content>
              </Column>
            </Columns>
            
          </Container>
        </HeroBody>
  </Hero>
}

export default MasterTeaser

export const query = graphql`
  fragment MasterTeaser on MarkdownRemark {
    id
    html
    frontmatter {
      path
      date
    }
  }
`