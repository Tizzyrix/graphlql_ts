import { useMutation } from '@apollo/client';
import { USER_ADD_MUTATION } from '../mutations/users/user-add';
import { GET_ALL_USERS_QUERY } from '../query/users/get-all-users';

export const useAddUser = (): ((inputLogin: string, inputPassword: string) => void) => {
  const [setNewUser] = useMutation(USER_ADD_MUTATION);

  const addUser = (inputLogin: string, inputPassword: string) => {
    setNewUser({
      variables: {
        insertUsersObjects: {
          name: `${inputLogin}`,
          rocket: `${inputPassword}`,
        },
      },
      refetchQueries: [GET_ALL_USERS_QUERY],
    });
  };
  return addUser;
};
