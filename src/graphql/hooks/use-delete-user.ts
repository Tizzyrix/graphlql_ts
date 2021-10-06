import { useMutation } from '@apollo/client';
import { USER_DELETE_MUTATION } from '../mutations/users/user-delete'
import {GET_ALL_USERS_QUERY} from '../query/users/get-all-users'
import {CustomHookResult} from '../../types/types'


export const useDeleteUser = () :any => {

    const [delUser] = useMutation(USER_DELETE_MUTATION)

    const deleteUser = (inputLogin: string) => {
        delUser({
            variables: {
                "deleteUsersWhere": {
                    "name": {
                        "_eq": `${inputLogin}`
                    }
                }
            },
            refetchQueries: [GET_ALL_USERS_QUERY]
        })
    }
    return deleteUser
}