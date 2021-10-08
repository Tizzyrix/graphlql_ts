import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

type ItemProps = {
    item: {
        id: string,
        name: string,
        image?: string
    }
}

const Item: FC<ItemProps> = ({item: {name, id, image} }) => {
    return (
        <NavLink to={`/details/${id}`}>
            <div className='item'>
                <div className='item_id'>
                    <span>{id}</span>
                </div>
                {
                    image &&
                    <div className='item_image'>
                        <img src={image} />
                    </div>
                }
                <div className='item_name'>
                    <span>{name}</span>
                </div>
            </div>
        </NavLink>
    )
}


export default Item