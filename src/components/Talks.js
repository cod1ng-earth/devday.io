import React, { Children } from 'react'
import { Container, Title, Hero, HeroBody, Image, Column, Columns, Media, MediaLeft, MediaContent, Content } from 'bloomer'
import ResponsiveEmbed from 'react-responsive-embed';
import { animateScroll as scroll,  scroller } from 'react-scroll'

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
  
  class Talk extends React.Component {

    render() {

      return  <article className={"element accordion " + (this.props.isActive ? 'is-active' : '') } id={"talk-" + this.props.talk.id}>
          <div className="accordion-header toggle" onClick={() => this.props.onOpen(this.props.talk.id)}>
            <p><strong>{this.props.talk.speaker[0].name}{this.props.talk.speaker.length > 1 ? " e.a." : ""}</strong>: {this.props.talk.title}</p>
            <button className="toggle" aria-label="toggle"></button>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">
              <Speakers speakers={this.props.talk.speaker} />
              <blockquote>{this.props.talk.highlights.highlights}</blockquote>
              <Content dangerouslySetInnerHTML={{__html: this.props.talk.abstract.childMarkdownRemark.html}} />
              <blockquote>{this.props.talk.statement.statement}</blockquote>
              {this.props.talk.youtubeUrl && this.props.isActive &&
                <ResponsiveEmbed src={this.props.talk.youtubeUrl} allowFullScreen />
              }
            </div>
          </div>
        </article>
    }
  }

  export default class Talks extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          activeTalkId: props.talks[0].node.id
        }
        this.handleOpened = this.handleOpened.bind(this);
    }

    handleOpened(talkId) {
      if (this.state.activeTalkId == talkId) {
        this.setState({activeTalkId: null});
      } else {
        this.setState({activeTalkId: talkId});
      }

      //yep that's ugly. 
      setTimeout( () => {
        scroller.scrollTo(`talk-${talkId}`, {
          offset: -50,
          duration: 400,
          smooth: 'easeInOut'
        })
        }, 450)
      }
    
    render() {
      const listItems = this.props.talks.map(edge => {
        const talk = edge.node;
        return <Talk key={talk.id} talk={talk} isActive={talk.id==this.state.activeTalkId} onOpen={this.handleOpened}></Talk>
      });
  
      return <Hero isColor="dark">
                <HeroBody>
                    <Container>
                        <a name="talks"></a>
                        <h2 className="is-size-2">Talks</h2>
              
                        <section className="accordions" id="section-talks">
                            {listItems}
                        </section>
                        </Container>
                </HeroBody>
            </Hero>
    }
  }