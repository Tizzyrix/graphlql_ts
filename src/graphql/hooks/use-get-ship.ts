import { useQuery } from '@apollo/client';
import { GET_SHIP_QUERY } from '../query/ships/get-ship'
import {CustomHookResult} from '../../types/types'


 export const useGetShip = (id: string): any => {
    const {data, loading, error} = useQuery(GET_SHIP_QUERY, {
        variables: {
            shipId: id
        }
    })
    return {loading, error: error || null, data: data || null}
}