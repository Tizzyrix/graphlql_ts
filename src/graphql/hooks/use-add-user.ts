import { useMutation } from '@apollo/client';
import { USER_ADD_MUTATION } from '../mutations/users/user-add'
import {GET_ALL_USERS_QUERY} from '../query/users/get-all-users'
import {CustomHookResult} from '../../types/types'


export const useAddUser = (): any => {

    const [newUser] =  useMutation(USER_ADD_MUTATION)

    const addUser = (inputLogin: string, inputPassword: string) => {
        newUser({
            variables: {
                "insertUsersObjects": {
                    "name": `${inputLogin}`,
                    "rocket": `${inputPassword}`
                }
            },
            refetchQueries: [GET_ALL_USERS_QUERY]
        })
    }

    return addUser

}