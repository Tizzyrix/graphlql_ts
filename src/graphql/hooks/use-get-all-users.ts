import { useQuery } from '@apollo/client';
import { GET_ALL_USERS_QUERY } from '../query/users/get-all-users'
import {CustomHookResult} from '../../types/types'


 export const useGetAllUsers = (): any => {
    const {data, loading, error} = useQuery(GET_ALL_USERS_QUERY)
    return {loading, error: error || null, data: data || null}
}