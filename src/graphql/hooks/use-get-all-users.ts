import { useQuery } from '@apollo/client';
import { GET_ALL_USERS_QUERY } from '../query/users/get-all-users';
import { CustomHookResult, IUser } from '../../types/types';

type dataUsers = {
  users: IUser[];
};

export const useGetAllUsers = (): CustomHookResult<dataUsers> => {
  const { data, loading, error } = useQuery(GET_ALL_USERS_QUERY);
  return { loading, error, data };
};
