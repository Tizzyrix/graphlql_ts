import React, {FC} from 'react';
import { RootStateOrAny, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetRocket } from '../../graphql/hooks/use-get-rocket'
import { useGetShip } from '../../graphql/hooks/use-get-ship'
import { getItem } from '../../utils/utils'
import { FILTER_CATEGORIES } from '../../const/filter-categories'

import ErrorMessage from '../../components/ErrorMessage'
import LoadingSpinner from '../../components/LoadingSpinner'

const ItemInfo: FC = () => {

    const { id } = useParams<{id: string}>()

    const category = useSelector( (state: RootStateOrAny): string  => state.filter.category)

    const {data, error, loading} =  getItem(category, id ,useGetShip, useGetRocket)


    const item: any = data?.[FILTER_CATEGORIES[category]]

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorMessage />

    return(
        <div className='item-info'>
            <div className="item-info_id">
                <span>{ item.id }</span>
            </div>
            <div className='item-info_name'>
                <span>{item.name}</span>
            </div>
            <div className="item-info_type">
                <span>{item.type}</span>
            </div>
            <div className="item-info_image">
                <img src={item.image} />
            </div>
            <div className="item-info_class">
                <span>{item.class}</span>
            </div>
            <div className="item-info_model">
                <span>{item.model}</span>
            </div>
            <div className="item-info_country">
                <span>{item.country}</span>
            </div>
            <div className="item-info_description">
                <span>{item.description}</span>
            </div>
            <div className="item-info_active">
                <span>{item.active}</span>
            </div>
        </div>
    )
}

export default ItemInfo
