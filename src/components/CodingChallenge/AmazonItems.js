import React from 'react'
import { Columns, Column, Image } from 'bloomer'

export default ({ items }) => {
    const columns = items.map(entry => {
        const node = entry.node;
        return <Column key={'u-asin-' + node.ASIN} hasTextAlign="centered">
            <a href={node.DetailPageURL} target="_blank">
                <img src={node.Images.m.url} isDisplay="block"/>
            </a><br />
            <a href={node.DetailPageURL} target="_blank">{node.ItemAttributes.Title}</a>
            {node.Author}
        </Column>
    });

    return <Columns>
        {columns}
    </Columns>;
}
