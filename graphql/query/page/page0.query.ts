import { gql } from "graphql-request";

export const FIND_PAGES_0_BY_PARENT = gql`
  query FindPages0ByParent($parentId: String!) {
    findPages0ByParent(parentId: $parentId) {
      _id
      slug
      parent
      site
      data{
        type
        seo{
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
export const FIND_PAGES_0 = gql`
  query FindPages0 {
    findPages0 {
      _id
      site
      data{
        seo{
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
export const FIND_PAGE_0 = gql`
  query FindPage0($id:ID!) {
    findPage0(id:$id) {
      _id
      site
      parent
      data{
        type
        seo{
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