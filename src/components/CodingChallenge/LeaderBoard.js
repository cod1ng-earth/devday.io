import React from 'react'
import { Table } from 'bloomer'

export default ({ leaderBoard }) => {
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

    return <div>
                        
    <Table  isStriped isFullWidth>
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
    </Table>
    <a href="https://www.hackerrank.com/contests/devday-2018/leaderboard/1" target="_blank" className="has-text-right">full leaderboard</a>
    </div>;
}
