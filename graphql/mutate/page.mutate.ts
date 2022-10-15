import {  gql } from 'graphql-request'


export const CREATE_PAGE_0 = gql`
  mutation CreatePage0($input: CreatePage!) {
    createPage0(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_0 = gql`
  mutation UpdatePage0($id:ID!, $input: UpdatePage!) {
    updatePage0(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_0 = gql`
mutation UpdateImagePage0($id: ID!, $input: UpdateImage!, $uid: String!) {
  updateImagePage0 (id:$id, input: $input, uid:$uid) {
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
export const DELETE_PAGE_0 = gql`
  mutation DeletePage0($id: ID!) {
    deletePage0(id: $id)
  }
`;
export const DELETE_PAGES_0= gql`
mutation DeletePages0($ids: [String!]!) {
  deletePages0(ids:$ids)
}
`;
export const CREATE_PAGE_1 = gql`
  mutation CreatePage1($input: CreatePage!) {
    createPage1(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_1 = gql`
  mutation UpdatePage1($id:ID!, $input: UpdatePage!) {
    updatePage1(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_1 = gql`
mutation UpdateImagePage1($id: ID!, $input: UpdateImage!, $uid: String!) {
  updateImagePage1 (id:$id, input: $input, uid:$uid) {
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
export const DELETE_PAGE_1 = gql`
  mutation DeletePage1($id: ID!) {
    deletePage1(id: $id)
  }
`;
export const DELETE_PAGES_1= gql`
mutation DeletePages1($ids: [String!]!) {
  deletePages1(ids:$ids)
}
`;
export const CREATE_PAGE_2 = gql`
  mutation CreatePage2($input: CreatePage!) {
    createPage2(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_2 = gql`
  mutation UpdatePage2($id:ID!, $input: UpdatePage!) {
    updatePage2(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_2 = gql`
mutation UpdateImagePage2($id: ID!, $input: UpdateImage!, $uid: String!) {
  updateImagePage2 (id:$id, input: $input, uid:$uid) {
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
export const DELETE_PAGE_2 = gql`
  mutation DeletePage2($id: ID!) {
    deletePage2(id: $id)
  }
`;
export const DELETE_PAGES_2= gql`
mutation DeletePages2($ids: [String!]!) {
  deletePages2(ids:$ids)
}
`;
export const CREATE_PAGE_3 = gql`
  mutation CreatePage3($input: CreatePage!) {
    createPage3(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_3 = gql`
  mutation UpdatePage3($id:ID!, $input: UpdatePage!) {
    updatePage3(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_3 = gql`
mutation UpdateImagePage3($id: ID!, $input: UpdateImage!, $uid: String!) {
  updateImagePage3 (id:$id, input: $input, uid:$uid) {
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
export const DELETE_PAGE_3 = gql`
  mutation DeletePage3($id: ID!) {
    deletePage3(id: $id)
  }
`;
export const DELETE_PAGES_3= gql`
mutation DeletePages3($ids: [String!]!) {
  deletePages3(ids:$ids)
}
`;