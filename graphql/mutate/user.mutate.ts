import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUser!) {
    createUser(input: $input) {
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
