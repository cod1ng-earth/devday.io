import React, { Children } from 'react'
import { Container, Title, Hero, HeroBody, Image, Column, Columns, Media, MediaLeft, MediaContent, Content } from 'bloomer'
import bulmaAccordion from 'bulma-accordion';

const Speakers = ({speakers}) => {
    const items = speakers.map(sp => {
      return <Column key={sp.id}>
        <Media>
        <MediaLeft>
          <Image isSize="96x96" src={sp.image.resolutions.src} />
        </MediaLeft>
        <MediaContent>
          <Content>
          <strong>{sp.name}</strong> <br/>
          <p className="small" dangerouslySetInnerHTML={{__html: sp.bio.childMarkdownRemark.html}}></p>
          </Content>
        </MediaContent>
        </Media>
      </Column>;
    })
  
    return <Columns>
     {items}
    </Columns>
  }
  
  let q = 0;
  const Talk = ({talk}) => (
    <article className={"accordion " + (q++ == 0 ? 'is-active' : '') }>
        <div className="accordion-header toggle">
          <p><strong>{talk.speaker[0].name}{talk.speaker.length > 1 ? " e.a." : ""}</strong>: {talk.title}</p>
          <button className="toggle" aria-label="toggle"></button>
        </div>
        <div className="accordion-body">
          <div className="accordion-content">
            <Speakers speakers={talk.speaker} />
            {talk.abstract.childMarkdownRemark.internal.content}
          </div>
        </div>
      </article>
    );
  
  export default class Talks extends React.Component {
  
    componentDidMount() {
      new bulmaAccordion(this.accordions)
    }
  
    render() {
      
      const listItems = this.props.talks.filter(edge => (edge.node.location != null) ).map(edge => {
        const talk = edge.node;
        return <Talk key={talk.id} talk={talk}></Talk>
      });
  
      return <Hero>
                <HeroBody>
                    <Container>
                        <h2 className="is-size-2">Talks</h2>
              
                        <section className="accordions" id="section-talks" ref={(accs) => { this.accordions = accs; }}>
                            {listItems}
                        </section>
                        </Container>
                </HeroBody>
            </Hero>
    }
  }