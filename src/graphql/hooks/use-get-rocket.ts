import { useQuery } from '@apollo/client';
import { GET_ROCKET_QUERY } from '../query/rockets/get-rocket'
import {CustomHookResult} from '../../types/types'


export const useGetRocket = (id: string): any => {
    const {data, loading, error} = useQuery(GET_ROCKET_QUERY, {
        variables: {
            rocketId: id
        }
    })
    return {loading, error: error || null, data: data || null}
}