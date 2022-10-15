import { gql } from "graphql-request";

export const FIND_PAGE_3_BY_PARENT = gql`
  query FindPages3ByParent($parentId: String!) {
    findPages3ByParent(parentId: $parentId) {
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
export const FIND_PAGES_3 = gql`
  query FindPages3 {
    findPages3 {
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
export const FIND_PAGE_3 = gql`
  query FindPage3($id:ID!) {
    findPage3(id:$id) {
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