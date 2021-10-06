import { useQuery } from '@apollo/client';
import { GET_ALL_ROCKETS_QUERY } from '../query/rockets/get-all-rockets'
import {CustomHookResult} from '../../types/types'


export const useGetAllRockets = (): any => {
    const {data, loading, error} = useQuery(GET_ALL_ROCKETS_QUERY)
    return {loading, error: error || null, data: data || null}
}