import { gql } from '@apollo/client';

export const GET_ROCKET_QUERY = gql`
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
`;
