import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS_QUERY } from '../query/ships/get-all-ships';
import { CustomHookResult, DataShips } from '../../types/types';

export const useGetAllShips = (): CustomHookResult<DataShips> => {
  const { data, loading, error } = useQuery(GET_ALL_SHIPS_QUERY);
  return { loading, error, data };
};
