import { gql } from '@apollo/client';

export const GET_ALL_ROCKETS_QUERY = gql`
  query Query {
    rockets {
      id
      name
    }
  }
`;
