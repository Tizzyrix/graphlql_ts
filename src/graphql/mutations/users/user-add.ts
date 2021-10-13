import { gql } from '@apollo/client';

// Rocket as password
export const USER_ADD_MUTATION = gql`
  mutation Mutation($insertUsersObjects: [users_insert_input!]!) {
    insert_users(objects: $insertUsersObjects) {
      returning {
        name
        rocket
      }
    }
  }
`;
