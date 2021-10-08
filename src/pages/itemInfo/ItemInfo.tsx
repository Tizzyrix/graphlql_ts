import React, { FC } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useParams } from 'react-router-dom'
import { dataRocket, useGetRocket } from '../../graphql/hooks/use-get-rocket'
import { dataShip, useGetShip } from '../../graphql/hooks/use-get-ship'
import { EFilterCategoriesAll } from '../../types/types'

import ErrorMessage from '../../components/ErrorMessage'
import LoadingSpinner from '../../components/LoadingSpinner'
import ItemInfoShip from '../../components/ItemInfo/ItemInfoShip';
import ItemInfoRocket from '../../components/ItemInfo/ItemInfoRocket';

const ItemInfo: FC = () => {

    const { id } = useParams<{id: string}>()

    const category = useTypedSelector( state => state.filter.category )

    const getItem = (category: EFilterCategoriesAll, id: string) => {
        switch(category) {
            case EFilterCategoriesAll.ships: {
                return useGetShip(id)
            }
            case EFilterCategoriesAll.rockets: {
                return useGetRocket(id)
            }
            default:
                console.log('error in ItemInfo')
        }
    }

    const { data, error, loading } =  getItem(category, id)

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorMessage />

    return(
        <div className='item-info'>
            {
                category === EFilterCategoriesAll.rockets ?
                <ItemInfoRocket data={data as dataRocket} />
                :
                <ItemInfoShip data={data as dataShip} />
            }
        </div>
    )
}

export default ItemInfo
