import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

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
  </Footer>
)

export default AppFooter
