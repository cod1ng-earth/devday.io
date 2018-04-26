import React from 'react'
import Link from 'gatsby-link'
import { Section, Container, Title, Content } from 'bloomer'

const CodeOfConduct = ({data}) => {
  return <Container>
    <Section>
    <Link to="/">Go back to the homepage</Link>

    <Title isSize="3">Code of Conduct</Title>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Content>
    <Link to="/">Go back to the homepage</Link>
    </Section>
  </Container>

}

export default CodeOfConduct

export const query = graphql`
  query CoCQuery {
    markdownRemark(id: {regex: "/codeOfConduct/"}) {
      html
      id
    }
  }
`