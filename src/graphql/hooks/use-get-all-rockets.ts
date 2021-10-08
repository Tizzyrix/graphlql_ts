import { useQuery } from '@apollo/client';
import { GET_ALL_ROCKETS_QUERY } from '../query/rockets/get-all-rockets'
import { CustomHookResult, DataRockets } from '../../types/types'

export const useGetAllRockets = (): CustomHookResult<DataRockets> => {
    const { data, loading, error } = useQuery(GET_ALL_ROCKETS_QUERY)
    return { loading, error, data }
}