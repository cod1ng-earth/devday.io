import React, { Children } from 'react'
import Link from 'gatsby-link'
import { Container, Title, Hero, HeroBody, Image, Column, Columns, Media, MediaLeft, MediaContent, Content } from 'bloomer'
import MasterTeaser from '../components/MasterTeaser';
import StatsRibbon from '../components/StatsRibbon';
import Talks from '../components/Talks';
import Impressions from '../components/Impressions';
import Newsletter from '../components/Newsletter';
import CodingChallenge from '../components/CodingChallenge/CodingChallenge';

const IndexPage = ({data}) => {

  return <div>
    <MasterTeaser content={data.masterTeaser.html}/>
    <StatsRibbon />
    
    <Talks talks={data.talks.edges.filter(e => (e.node.location != null) )}/>
    
    <CodingChallenge 
     leaderBoard={data.leaderBoard.edges} 
     challenges={data.challenges.edges}
     prizes={data.amazonPrizes.edges}
     />

    <Impressions images={data.impressions.edges} />
    
    <Newsletter />

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

    impressions: allCloudinaryImage(filter: {
      public_id: { ne: "sample" }
    }, sort: {fields: [bytes], order: ASC})  {
      edges {
        node {
          width
          height
          secure_url
          public_id
          type
          format
          scaled_image_url
          thumb_dims {
            w
            h
          }
          context {
            custom {
              alt
              caption
            }
          }
          tags
        }
      }
    }

    leaderBoard: allCodingChallengeLeaderboardJson {
      edges {
        node {
          user,
          time,
          score,
          country
        }
      }
    },

    challenges: allCodingChallengeChallengesJson {
      edges {
        node {
          name,
          path,
          difficulty
        }
      }
    },

    amazonPrizes: allAmazonProduct {
      edges {
        node {
          ASIN
          DetailPageURL
          ItemAttributes {
            Title
            Binding
            ISBN
            NumberOfPages
            PublicationDate
            Publisher
          }
          ItemLinks {
            ItemLink {
              URL
              Description
            }
          }
          Images {
            s {
              url
            }
            m {
              url
            }
            l {
              url
            }
          }
          OfferSummary {
            LowestNewPrice {
              FormattedPrice
            }
            LowestUsedPrice {
              FormattedPrice
            }
            TotalNew
            TotalUsed
            TotalCollectible
            TotalRefurbished
          }              
        }
      }
    },

    talks: allContentfulTalk(sort: {fields: [slotTime], order: ASC}) {
      edges {
        node {
          id
          title
          slotTime
          location
          youtubeUrl
          highlights {
            highlights
          }
          statement {
            statement
          }
          abstract {
            childMarkdownRemark {
              html
            }
          }
          speaker {
            id
            name
            position
            image {
              title
              resolutions(width: 320) {
                width
                height
                src
              }
            }
            bio {
              childMarkdownRemark {
                html
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
