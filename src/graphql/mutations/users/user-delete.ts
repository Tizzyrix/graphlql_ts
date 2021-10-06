import {gql} from '@apollo/client'

export const USER_DELETE_MUTATION = gql`
    mutation Mutation($deleteUsersWhere: users_bool_exp!) {
        delete_users(where: $deleteUsersWhere) {
        returning {
            name
            rocket
            id
        }
        }
    }
`