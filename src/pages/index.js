import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Hero, HeroBody } from 'bloomer'
import MasterTeaser from '../components/MasterTeaser';
import Tickets from '../components/Tickets';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Speakers from '../components/Speakers';

const IndexPage = ({data}) => {
  
  return <div>
    <MasterTeaser content={data.masterTeaser.html}/>
    <Tickets />
    <About content={data.about}/>
    <Schedule edges={data.talks.edges} />
    <Speakers speakers={data.speakers.edges} />
    <Hero isSize="medium" isColor="white">
        <HeroBody>
          <Container>
              <h2 className="is-size-2">Partners</h2>
          </Container>
        </HeroBody>
    </Hero>
    </div>;
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    
    masterTeaser: markdownRemark(id: {regex: "/masterTeaser/"}) {
      ...MasterTeaser
    }

    tickets: markdownRemark(id: {regex: "/tickets/"}) {
      html
      id
    }

    about: markdownRemark(id: {regex: "/about/"}) {
      html
      id
      frontmatter {
        title
      }
    }

    speakers: allContentfulSpeaker {
        edges {
          node {
            id
            name
            position
            bio {
              bio
            }
            image {
              id
              resolutions {
                src
              }
            }
          }
        }
    }

    talks: allContentfulTalk {
      edges {
        node {
          id
          title
          slotTime
          location
          createdAt
          abstract {
            childMarkdownRemark {
              internal {
                content
              }
            }
          }
          speaker {
            id
            name
            position
            image {
              title
              resolutions {
                width
                height
                src
              }
            }
            bio {
              childMarkdownRemark {
                internal {
                  content
                }
              }
            }
          }
          
        }
      }
    }

    
}
`

/*
allMarkdownRemark {
      edges {
        node {          
          id
          frontmatter {
          	title
          }
          html
        }
      }
    }
    */
