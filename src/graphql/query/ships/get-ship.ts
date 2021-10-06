import {gql} from '@apollo/client'


export const GET_SHIP_QUERY = gql`
    query Query($shipId: ID!) {
        ship(id: $shipId) {
        class
        id
        image
        model
        name
        type
        }
    }
`