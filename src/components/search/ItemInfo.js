import React from 'react';
import {useSelector} from 'react-redux'
import { useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';
import {GET_CATEGORY_ROCKET, GET_CATEGORY_SHIP} from '../../apollo/query/categories'
import {FILTER_VAR} from '../../utils/utils'

import Loader from '../app/Loader'
import Error from '../app/Error'


const ItemInfo = () => {

    const { id } = useParams()
    const category = useSelector(state => state.filter.category)

    const idName = ( (category) => {
        switch(category) {
            case FILTER_VAR.categories.rockets: {
                return 'rocketId'
            } 
            case FILTER_VAR.categories.ships: {
                return 'shipId'
            } 
        }
    })(category)

    const {data, error, loading} = useQuery((()=>{
        switch(category) {
            case FILTER_VAR.categories.ships: {
                return GET_CATEGORY_SHIP
            }
            case FILTER_VAR.categories.rockets: {
                return GET_CATEGORY_ROCKET
            }
        }
    })(), {
        variables: {
            [`${idName}`]: `${id}`
        }
    })



    if (loading) return <Loader />
    if (error) return <Error />
    return(
        <div>
            {/* <span>{data.rocket.name}</span>
            <span>{data.rocket.description}</span> */}
        </div>
    )
}

export default ItemInfo