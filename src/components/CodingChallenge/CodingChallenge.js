import React from 'react'
import { Hero, HeroBody, Container, Table, Level, LevelItem, LevelRight, LevelLeft, Tabs, TabList, TabLink, Tab } from 'bloomer'
import LeaderBoard from './LeaderBoard';
import Challenges from './Challenges';

export default class CodingChallenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Challenges'
        }
    }
    
    render() {
        return <Hero isSize="small" isColor="warning" id="section-stats-ribbon">
            <HeroBody>
                <Container>
                    <Level>
                        <LevelLeft>
                            <LevelItem>
                                <h2 className="is-size-2">Coding Challenge</h2>
                            </LevelItem>
                        </LevelLeft>
                        <LevelRight>
                            <LevelItem href="https://www.hackerrank.com/contests/devday-2018/leaderboard/1" target="_blank">
                                full leaderboard
                        </LevelItem>
                        </LevelRight>
                    </Level>

                    <Tabs isBoxed>
                        <TabList>
                            
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
                    
                </Container>
            </HeroBody>
        </Hero>
    }

}