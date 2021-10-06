import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS_QUERY } from '../query/ships/get-all-ships'
import {CustomHookResult} from '../../types/types'


export const useGetAllShips = (): any => {
    const {data, loading, error} = useQuery(GET_ALL_SHIPS_QUERY)
    return {loading, error: error || null, data: data || null}
}