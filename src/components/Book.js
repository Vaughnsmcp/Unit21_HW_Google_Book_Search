import React from "react"

import { Row, Column, Container } from "./Grids"

import { ListItem } from "./List"

function Book({ author, title, description, image, link }) {
    return (
        <ListItem>
            <Row>
                <Column>
                    <h2>{title}</h2>
                    <h3>{link}</h3>
                </Column>
                <Column>
                    <img src={image} alt={title} />
                </Column>
                <Column>
                    <p>{author}</p>
                </Column>
                <Column>
                    <p>{description}</p>
                </Column>
            </Row>
        </ListItem>

    )
}
export default Book