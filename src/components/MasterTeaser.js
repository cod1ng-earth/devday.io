import React from 'react'
import {Hero, HeroHeader, HeroBody, HeroFooter, Container, Content, Columns, Column, Image } from 'bloomer'
import keyVisual from '../img/devday18-keyvisual.svg'

const MasterTeaser = ({content}) => {
  const bodyStyles = {
    backgroundImage:"url(" + keyVisual + ")",
    backgroundColor: "#0000FF",
    backgroundRepeat: "no-repeat",
    backgroundSize: "40%",
    backgroundPositionX: "50%"
  
  };
  return <Hero id="section-master-teaser" isSize="large" isColor="primary" className="bg-texture">
        <HeroBody >
          <img src={keyVisual} className="key-visual" />
          <Container >
            
            <h1>Dev Day 2018: <strong>Revisited</strong>
              <small>Celebrating Software Craftsmanship</small>
            </h1>
            <h2>2018 / 05 / 26</h2>
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