import React from 'react'
import { Hero, HeroBody, Container, Table, Level, LevelItem, LevelRight, LevelLeft, Tabs, TabList, TabLink, Tab } from 'bloomer'

const Leaderboard = ({ leaderBoard }) => {
    let idx = 1;

    const trEntries = leaderBoard.map(entry => (
        <tr key={'u-user' + idx}>
            <td>{idx++}</td>
            <td>{entry.node.user}</td>
            <td>{entry.node.score}</td>
            <td>{entry.node.time}</td>
            <td><img src={"/img/flags/" + entry.node.country + ".png"} /></td>
        </tr>
    ));

    return <Table isBordered isStriped isFullWidth>
        <thead>
            <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Score</th>
                <th>Time</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {trEntries}
        </tbody>
    </Table>;
}

export default class CodingChallenge extends React.Component {

    constructor({props, data}) {
    console.dir(data);
        super(props);
        this.state = {
            activeTab: 'leaderboard'
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
                            <Tab  >
                                <TabLink>
                                    <span>Leaderboard</span>
                                </TabLink>
                            </Tab>
                            <Tab>
                                <TabLink>
                                    <span>Challenges</span>
                                </TabLink>
                            </Tab>
                            <Tab >
                                <TabLink>
                                    <span>Prizes</span>
                                </TabLink>
                            </Tab>
                        </TabList>
                    </Tabs>

                    <Leaderboard leaderBoard={this.props.leaderBoard} />
                </Container>
            </HeroBody>
        </Hero>
    }

}