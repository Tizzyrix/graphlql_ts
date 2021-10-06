import React, { FC } from 'react'
import { ApolloError } from '@apollo/client'

import LoadingSpinner from '../LoadingSpinner'
import ErrorMessage from '../ErrorMessage'
import Item from './Item'


type ItemListProps = {
    data: any,
    error: ApolloError,
    loading: boolean,
    category: string,
}


const ItemList: FC<ItemListProps> = ({ data, error, loading, category}) => {

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorMessage />

    return(
        <div className='item-list'>
            {
                data[category]?.map( (item: any) => <Item
                key={item.id}
                item={item}
                /> )
            }
        </div>
    )
}

export default ItemList