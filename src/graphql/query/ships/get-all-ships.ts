import {gql} from '@apollo/client'

export const GET_ALL_SHIPS_QUERY = gql`
    query Query {
        ships {
        id
        name
        image
        }
    }
`