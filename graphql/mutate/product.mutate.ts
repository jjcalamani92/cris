import { gql } from "graphql-request";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProduct!, $type: String!) {
    createProduct(input: $input, type: $type) {
      _id
      site
      parent
      type
      data {
        name
        slug
        mark
        inStock
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

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $input: UpdateProduct!, $type: String!) {
    updateProduct(id: $id, input: $input, type: $type) {
      _id
      type
      parent
      data {
        name
        slug
        mark
        inStock
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

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!, $type: String!) {
    deleteProduct(id: $id, type: $type)
  }
`;
export const DELETE_MANY_PRODUCT_BY_ID = gql`
  mutation DeleteProductsById($ids: [String!]!, $type: String!) {
    deleteProductsById (ids:$ids, type: $type) 
  }
`;

export const UPDATE_PRODUCT_IMAGE = gql`
  mutation UpdateProductImage(
    $id: ID!
    $input: [UpdateImage!]!
    $type: String!
    $uid: String!
  ) {
    updateProductImage(id: $id, input: $input, type: $type, uid: $uid) {
      _id
      type
      data {
        name
        slug
        mark
        inStock
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
