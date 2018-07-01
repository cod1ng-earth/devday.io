import React from 'react'
import { Container, Box, Level, LevelItem, LevelLeft, LevelRight } from 'bloomer'

export default ({ challenges }) => {
    let idx = 1;
    const boxes = challenges.map(entry => (
        <Box key={'u-ch-' + idx++}>
        <Level>
            <LevelLeft>
                <LevelItem href={"https://www.hackerrank.com/contests/devday-2018/challenges/" + entry.node.path} target="_blank">
                    {entry.node.name}
                </LevelItem> 
            </LevelLeft>

            <LevelRight>
                <LevelItem>
                <small>{entry.node.difficulty}</small>
                </LevelItem>
            </LevelRight>
        </Level>
        </Box>
    ));
    return <Container> 
        {boxes}
    </Container>;

}
