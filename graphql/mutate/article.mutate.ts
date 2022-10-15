import {  gql } from 'graphql-request'


export const CREATE_ARTICLE = gql`
mutation createArticle($input: CreateArticle!) {
  createArticle(input: $input) {
    _id
  }
}
`;
export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($id: ID!, $input: UpdateArticle!) {
    updateArticle(id: $id, input: $input) {
			_id
    }
  }
`;
export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) 
  }
`;