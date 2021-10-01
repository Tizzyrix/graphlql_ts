import {gql} from '@apollo/client'



export const GET_CATEGORY_ROCKETS = gql`
    query Query {
        rockets {
        id
        name
        }
    }
`
export const GET_CATEGORY_ROCKET = gql`
    query Query($rocketId: ID!) {
        rocket(id: $rocketId) {
        country
        description
        id
        name
        type
        active
        }
    }
`




export const GET_CATEGORY_SHIPS = gql`
    query Query {
        ships {
        id
        name
        image
        }
    }
`

export const GET_CATEGORY_SHIP = gql`
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
