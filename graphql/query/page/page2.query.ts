import { gql } from "graphql-request";

export const FIND_PAGE_2_BY_PARENT = gql`
  query FindPages2ByParent($parentId: String!) {
    findPages2ByParent(parentId: $parentId) {
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
export const FIND_PAGES_2 = gql`
  query FindPages2 {
    findPages2 {
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
export const FIND_PAGE_2 = gql`
  query FindPage2($id:ID!) {
    findPage2(id:$id) {
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