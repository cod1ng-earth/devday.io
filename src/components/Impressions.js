import React from 'react'
import Lightbox from 'lightbox-react';
import { Section, Container, Button, Content, Columns, Column, Level, LevelItem,LevelLeft,LevelRight, Box } from 'bloomer'
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

export default class Impressions extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            caption: null,
            extended: false
        }
    }
    render() {
        
            /*src: i.node.secure_url,
    thumbnail: i.node.scaled_image_url,
    thumbnailWidth: i.node.thumb_dims.w,
    thumbnailHeight: i.node.thumb_dims.h,
    tags: i.node.tags.map(t => ({value: t, title: t})),
    caption: i.node.context ? i.node.context.custom.caption : null
    */
        let imgs = this.props.images.map( (i,idx) => (
            <div key={i.node.public_id} >
                <img src={i.node.scaled_image_url} onClick={() => this.setState({ isOpen: true,photoIndex: idx })}/>
            </div>
        ));
        const captions = this.props.images.map(i => i.node.context ? i.node.context.custom.caption : ""); 
        const lbImgs = this.props.images.map(i => i.node.secure_url);
        const { photoIndex, isOpen } = this.state;

        if (!this.state.extended) {
            imgs = imgs.slice(0,10)
        } 
        
        return <Section id="section-impressions">
                    <a name="impressions"></a>
                    <Container>
                        <Level>
                            <LevelLeft>
                                <LevelItem>
                                    <h2 className="is-size-2">Impressions</h2>
                                </LevelItem>
                            </LevelLeft>
                            <LevelRight>
                                <LevelItem>
                                    <Button isLink onClick={() => this.setState({extended: !this.state.extended})}>show all</Button>
                                </LevelItem>
                            </LevelRight>
                        </Level>
                    </Container>
                        <StackGrid 
                            columnWidth={320} duration={600} monitorImagesLoaded={true} appearDelay={150}
                            appear={scaleDown.appear}
                            appeared={scaleDown.appeared}
                            enter={scaleDown.enter}
                            entered={scaleDown.entered}
                            leaved={scaleDown.leaved}
                        >{imgs}</StackGrid>

                        {isOpen && (
                        <Lightbox
                            mainSrc={lbImgs[photoIndex]}
                            nextSrc={lbImgs[(photoIndex + 1) % lbImgs.length]}
                            prevSrc={lbImgs[(photoIndex + lbImgs.length - 1) % lbImgs.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + lbImgs.length - 1) % lbImgs.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % lbImgs.length,
                            })
                            }
                            imageTitle={captions[photoIndex]}
                            enableZoom={true}
                        />
                    )}
                
            </Section>   
    }
  
}
