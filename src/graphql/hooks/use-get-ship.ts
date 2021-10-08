import { useQuery } from '@apollo/client';
import { GET_SHIP_QUERY } from '../query/ships/get-ship'
import { CustomHookResult, IShipInfo } from '../../types/types'

export type dataShip = {
    ship: IShipInfo
}

export const useGetShip = (id: string): CustomHookResult<dataShip> => {
    const {data, loading, error} = useQuery(GET_SHIP_QUERY, {
        variables: {
            shipId: id
        }
    })
    return {loading, error, data}
}