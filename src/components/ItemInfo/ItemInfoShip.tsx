import React, { FC } from 'react'
import { dataShip } from '../../graphql/hooks/use-get-ship';


type ItemInfoShipProps = {
    data: dataShip
}

const ItemInfoShip: FC<ItemInfoShipProps> = ({ data }) => {
    return (
        <>
            <div className="item-info_class">
                <span>{data.ship.class}</span>
            </div>
            <div className="item-info_id">
                <span>{data.ship.id}</span>
            </div>
            <div className="item-info_image">
                <img src={data.ship.image} alt="photo" />
            </div>
            <div className="item-info_model">
                <span>{data.ship.model}</span>
            </div>
            <div className="item-info_name">
                <span>{data.ship.name}</span>
            </div>
            <div className="item-info_type">
                <span>{data.ship.type}</span>
            </div>
        </>
    )
}

export default ItemInfoShip;