import { useMutation } from '@apollo/client';
import { USER_DELETE_MUTATION } from '../mutations/users/user-delete';
import { GET_ALL_USERS_QUERY } from '../query/users/get-all-users';

export const useDeleteUser = (): ((inputLogin: string) => void) => {
  const [setDeleteUser] = useMutation(USER_DELETE_MUTATION);

  const deleteUser = (inputLogin: string) => {
    setDeleteUser({
      variables: {
        deleteUsersWhere: {
          name: {
            _eq: `${inputLogin}`,
          },
        },
      },
      refetchQueries: [GET_ALL_USERS_QUERY],
    });
  };
  return deleteUser;
};
