import { gql } from "graphql-request";

export const FIND_PAGE_1_BY_PARENT = gql`
  query FindPages1ByParent($parentId: String!) {
    findPages1ByParent(parentId: $parentId) {
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
export const FIND_PAGES_1 = gql`
  query FindPages1 {
    findPages1 {
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
export const FIND_PAGE_1 = gql`
  query FindPage1($id:ID!) {
    findPage1(id:$id) {
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