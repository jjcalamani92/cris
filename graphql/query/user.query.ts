import { gql } from "graphql-request";

export const FIND_USER = gql`
  query FindUser($id: ID!) {
    findUser(id: $id) {
      _id
      data {
        username
        role
        image{
          src
          alt
        }
        status
      }
      email
      password
      site
    }
  }
`;
export const FIND_USER_BY_EMAIL = gql`
  query FindUserByEmail($email: String!) {
    findUserByEmail(email: $email) {
      _id
      data {
        username
        role
        image{
          src
          alt
        }
      }
      email
      password
      site
    }
  }
`;
