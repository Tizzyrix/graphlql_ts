import React, { FC } from 'react'
import {RootStateOrAny, useSelector} from 'react-redux'
import ItemList from '../../components/search/ItemList'
import { useGetAllRockets } from '../../graphql/hooks/use-get-all-rockets'
import { useGetAllShips } from '../../graphql/hooks/use-get-all-ships'
import { getItems } from '../../utils/utils'


const ItemListContainer: FC = () => {
    const category = useSelector( (state: RootStateOrAny) => state.filter.category)

    const {data, error, loading} = getItems(category, useGetAllShips, useGetAllRockets)

    return <ItemList
        data={data}
        error={error}
        loading={loading}
        category={category}
    />
}
export default ItemListContainer