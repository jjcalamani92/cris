import { gql } from "graphql-request";

export const FIND_FOODS_WITH_CURSOR = gql`
  query ListFoodWithCursor($args: ConnectionArgs!, $type: String!, $siteId: String!) {
    listFoodWithCursor(args: $args, type: $type, siteId: $siteId) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          cursor
          node {
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
                image {
                  src
                  alt
                }
              }
              image {
                uid
                src
                alt
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
export const FIND_FOODS_BY_PARENT = gql`
  query FindFoodsByParent($parentId: String!, $type: String!) {
    findFoodsByParent(parentId: $parentId, type: $type) {
      _id
      data {
        name
        slug
        price
        discountPrice
        description
      }
    }
  }
`;
export const FIND_ALL_FOODS_BY_PARENT = gql`
  query FindAllFoodsByParent($parentId: String!) {
    findAllFoodsByParent(parentId: $parentId) {
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
          image {
            src
            alt
          }
        }
        image {
          uid
          src
          alt
        }
      }
    }
  }
`;
export const FIND_ALL_FOODS = gql`
  query FindAllFoods {
    findAllFoods {
      _id
      site
      type
      data {
        seo {
          title
          description
        }
      }
    }
  }
`;
export const FIND_FOOD = gql`
  query FindFood($id: ID!, $type: String!) {
    findFood(id: $id, type: $type) {
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
          src
          alt
        }
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
    }
  }
`;
