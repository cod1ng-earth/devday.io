import React from 'react'
import {Hero, HeroHeader, HeroBody, HeroFooter, Container, Content } from 'bloomer'

const MasterTeaser = ({content}) => {
  
  return <Hero isSize="medium" isColor="primary" className="master-teaser bg-texture">
        <HeroBody>
          <Container>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Content>
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