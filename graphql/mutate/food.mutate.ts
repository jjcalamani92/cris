import { gql } from "graphql-request";

export const CREATE_FOOD = gql`
  mutation CreateFood($input: CreateFood!, $type: String!) {
    createFood(input: $input, type: $type) {
      _id
      site
      parent
      type
      data {
        name
        slug
        
        price
        discountPrice
        description
        seo {
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;

export const UPDATE_FOOD = gql`
  mutation UpdateFood($id: ID!, $input: UpdateFood!, $type: String!) {
    updateFood(id: $id, input: $input, type: $type) {
      _id
      type
      data {
        name
        slug
        
        price
        discountPrice
        description
        promotion {
          name
          href
        }
        image {
          uid
          src
          alt
        }
        seo {
          title
          href
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;

export const DELETE_FOOD = gql`
  mutation DeleteFood($id: ID!, $type: String!) {
    deleteFood(id: $id, type: $type)
  }
`;
export const DELETE_MANY_FOOD_BY_ID = gql`
  mutation DeleteFoodsById($ids: [String!]!, $type: String!) {
    deleteFoodsById (ids:$ids, type: $type) 
  }
`;

export const UPDATE_FOOD_IMAGE = gql`
  mutation UpdateFoodImage(
    $id: ID!
    $input: [UpdateImage!]!
    $type: String!
    $uid: String!
  ) {
    updateFoodImage(id: $id, input: $input, type: $type, uid: $uid) {
      _id
      type
      data {
        name
        slug
        price
        discountPrice
        description
        promotion {
          name
          href
        }
        image {
          uid
          src
          alt
        }
        seo {
          title
          href
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
