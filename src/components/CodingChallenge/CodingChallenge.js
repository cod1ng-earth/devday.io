import React from 'react'
import { Container, Section, Table, Level, LevelItem, LevelRight, LevelLeft, Tabs, TabList, TabLink, Tab } from 'bloomer'
import LeaderBoard from './LeaderBoard';
import Challenges from './Challenges';
import AmazonItems from './AmazonItems';

export default class CodingChallenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Prizes'
        }
    }
    
    render() {
        return <Section>
            <Container>
                <a name="coding-challenge"></a>
                <h2 className="is-size-2">Coding Challenge</h2>
                    <Tabs>
                        <TabList isAlign="left">
                            <Tab className={this.state.activeTab == 'LeaderBoard' ? 'is-active' : ''} onClick={() => this.setState({activeTab: 'LeaderBoard'}) } >
                                <TabLink>
                                    <span>Leaderboard</span>
                                </TabLink>
                            </Tab>
                            <Tab className={this.state.activeTab == 'Challenges' ? 'is-active' : ''} onClick={() =>  this.setState({activeTab: 'Challenges'}) } >
                                <TabLink>
                                    <span>Challenges</span>
                                </TabLink>
                            </Tab>
                            <Tab className={this.state.activeTab == 'Prizes' ? 'is-active' : ''} onClick={() =>  this.setState({activeTab: 'Prizes'}) } >
                                <TabLink>
                                    <span>Prizes</span>
                                </TabLink>
                            </Tab>
                        </TabList>
                    </Tabs>

                    {this.state.activeTab == 'LeaderBoard' &&  <LeaderBoard leaderBoard={this.props.leaderBoard} /> }
                    {this.state.activeTab == 'Challenges' &&  <Challenges challenges={this.props.challenges} /> }
                    {this.state.activeTab == 'Prizes' &&  <AmazonItems items={this.props.prizes} /> }
                </Container>
            </Section>

    }

}