import {gql} from '@apollo/client'


export const GET_ALL_USERS_QUERY = gql`
    query Query {
        users {
        name
        rocket
        id
        }
    }
`