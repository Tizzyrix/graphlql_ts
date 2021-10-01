import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useQuery} from '@apollo/client'
import {GET_CATEGORY_ROCKETS, GET_CATEGORY_SHIPS} from '../../apollo/query/categories'
import {FILTER_VAR} from '../../utils/utils'
import {changeItemList} from '../../redux/actions'

import Item from './Item'
import Loader from '../app/Loader'
import Error from '../app/Error'




const ItemList = () => {
    const dispatch = useDispatch()

    const category = useSelector(state => state.filter.category)
    // const items = useSelector(state => state.itemsList.items)

    const queryHandler = (category) => {
        switch(category) {
            case FILTER_VAR.categories.ships: {
                return GET_CATEGORY_SHIPS
            }
            case FILTER_VAR.categories.rockets: {
                return GET_CATEGORY_ROCKETS
            }
        }
    }

    const endPoint = queryHandler(category)
    const {data, error, loading, refetch} = useQuery(endPoint)
    
    if (loading) return <Loader />
    if (error) return <Error />

    return(
        <div className='item-list'>
            {
                // items[category].items.map(item => <Item key={item.id} item={item}/>)
                data[category].map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList