import {gql} from '@apollo/client'

// Rocket as password
export const USER_ADD = gql`
    mutation Mutation($insertUsersObjects: [users_insert_input!]!) {
        insert_users(objects: $insertUsersObjects) {
        returning {
            name
            rocket
        }
        }
    }
`

export const USER_DELETE = gql`
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