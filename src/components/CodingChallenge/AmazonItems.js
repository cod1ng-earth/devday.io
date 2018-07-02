import React from 'react'
import { Columns, Column, Image } from 'bloomer'

export default ({ items }) => {
    const columns = items.map(entry => {
        const node = entry.node;
        return <Column key={'u-asin-' + node.asin} hasTextAlign="centered">
            <a href={node.link} target="_blank">
                <img src={node.imageUrl} isDisplay="block"/>
            </a><br />
            <a href={node.link} target="_blank">{node.title}</a>
            <p>{node.author}</p>
        </Column>
    });

    return <Columns>
        {columns}
    </Columns>;
}
