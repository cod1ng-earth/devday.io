import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import Link from "gatsby-link";

const AppFooter = () => (
  <Footer id="footer" >
    <Container>
      <h2 className="has-text-centered is-size-3 has-text-weight-bold">
        Contact Us
      </h2>
        <Columns>
          <Column>
            <p>
              +49 123 456 789
            </p>
          </Column>
          <Column>
            <p>
              +49 123 456 789
            </p>
          </Column>
          <Column>
            <p>
              +49 123 456 789
            </p>
          </Column>
        </Columns>
    </Container>
    
    <Container className="has-text-centered">
      <Link to="/code-of-conduct" className="is-size-4">Code of Conduct</Link>
    </Container>
  </Footer>
)

export default AppFooter
