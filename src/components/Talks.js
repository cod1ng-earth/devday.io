import React, { Children } from 'react'
import { Container, Title, Hero, HeroBody, Image, Column, Columns, Media, MediaLeft, MediaContent, Content } from 'bloomer'
import bulmaAccordion from 'bulma-accordion';
import ResponsiveEmbed from 'react-responsive-embed';

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
          <div className="small" dangerouslySetInnerHTML={{__html: sp.bio.childMarkdownRemark.html}}></div>
          </Content>
        </MediaContent>
        </Media>
      </Column>;
    })
  
    return <Columns>
     {items}
    </Columns>
  }
  
  const Talk = ({talk, isActive}) => (
    <article className={"accordion " + (isActive ? 'is-active' : '') }>
        <div className="accordion-header toggle">
          <p><strong>{talk.speaker[0].name}{talk.speaker.length > 1 ? " e.a." : ""}</strong>: {talk.title}</p>
          <button className="toggle" aria-label="toggle"></button>
        </div>
        <div className="accordion-body">
          <div className="accordion-content">
            <Speakers speakers={talk.speaker} />
            <blockquote>{talk.highlights.highlights}</blockquote>
            <Content dangerouslySetInnerHTML={{__html: talk.abstract.childMarkdownRemark.html}} />
            <blockquote>{talk.statement.statement}</blockquote>
            {talk.youtubeUrl && isActive &&
              <ResponsiveEmbed src={talk.youtubeUrl} allowFullScreen />
            }
          </div>
        </div>
      </article>
    );
  
  export default class Talks extends React.Component {
    
    componentDidMount() {
      const acc = new bulmaAccordion(this.accordions)
      /*  acc.items.forEach(item => {
        https://github.com/Wikiki/bulma-accordion/blob/master/src/js/index.js
        item.addEventListener('click', this.yeeep, false);
      });
      */
    }
  
    render() {
      let q = 0;
      const listItems = this.props.talks.filter(edge => (edge.node.location != null) ).map(edge => {
        const talk = edge.node;
        return <Talk key={talk.id} talk={talk} isActive={q++==0}></Talk>
      });
  
      return <Hero isColor="dark">
                <HeroBody>
                    <Container>
                        <a name="talks"></a>
                        <h2 className="is-size-2">Talks</h2>
              
                        <section className="accordions" id="section-talks" ref={(accs) => { this.accordions = accs; }}>
                            {listItems}
                        </section>
                        </Container>
                </HeroBody>
            </Hero>
    }
  }