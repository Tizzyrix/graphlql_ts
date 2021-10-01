import React from 'react'
import {NavLink} from 'react-router-dom'

const Item = ({ item }) => {
    const name = item.name
    const image = item.image
    const id = item.id
    return (
        <NavLink to={`/details/${id}`}>
            <div className='item'>
                <div className='item_name'>
                    <h1>{name}</h1>
                </div>
                <div className='item_image'>
                    <img style={{'width': '200px'}} src={image} />
                </div>
            </div>
        </NavLink>
    )
}

export default Item