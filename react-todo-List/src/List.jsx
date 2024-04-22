import React from 'react'

import Item from "./Item"

function List() {
    return <section>
        <h2>Título de lista</h2>
        <ul>
            <Item>{props.Item}</Item>
        </ul>


    </section>
}
export default List