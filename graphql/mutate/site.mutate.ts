import {  gql } from 'graphql-request'

export const CREATE_SITE = gql`
  mutation CreateSite($input: CreateSite!) {
    createSite(input: $input) {
			_id
      data{
        seo{
          title
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_SITE = gql`
  mutation UpdateSite($id: ID!, $input: UpdateSite!) {
    updateSite(id: $id, input: $input) {
			_id
      data{
        name
        description
        type
        seo{
          title
          description
        }
        dataBase{
          uid
          label
          value
        }
        image{
          src
          alt
        }
        logo{
          src
          alt
        }
        icon{
          src
          alt
        }
      }
      client
      url
    }
  }
`;
export const UPDATE_SITE_IMAGE = gql`
  mutation UpdateSiteImage(
    $id: ID!
    $input: UpdateImageSite!
    $type: String!
    $uid: String!
  ) {
    updateSiteImage(id: $id, input: $input, type: $type, uid: $uid) {
      _id
      data{
        name
        description
        type
        seo{
          title
          description
        }
        dataBase{
          uid
          label
          value
        }
        image{
          src
          alt
        }
        logo{
          src
          alt
        }
        icon{
          src
          alt
        }
      }
      client
      url
    }
  }
`;


export const UPDATE_SITE_DB = gql`
  mutation UpdateDataBase($id: ID!, $input: [UpdateDataBase!]!) {
    updateDataBase(id: $id, input: $input) {
			_id
      data{
        name
        description
        type
        seo{
          title
          description
        }
        dataBase{
          uid
          label
          value
        }
        image{
          src
          alt
        }
        logo{
          src
          alt
        }
        icon{
          src
          alt
        }
      }
      client
      url
    }
  }
`;
export const DELETE_SITE = gql`
  mutation DeleteSite($id: ID!) {
    deleteSite(id: $id) 
  }
`;
export const DELETE_SITES = gql`
mutation DeleteSites($ids: [String!]!) {
  deleteSites(ids:$ids)
}
`;