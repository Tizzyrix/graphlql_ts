import { useQuery } from '@apollo/client';
import { GET_ROCKET_QUERY } from '../query/rockets/get-rocket'
import { CustomHookResult, IRocketInfo } from '../../types/types'

export type dataRocket = {
    rocket: IRocketInfo
}

export const useGetRocket = (id: string): CustomHookResult<dataRocket> => {
    const {data, loading, error} = useQuery(GET_ROCKET_QUERY, {
        variables: {
            rocketId: id
        }
    })
    return { loading, error, data }
}