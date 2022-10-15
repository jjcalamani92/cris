import { gql } from "graphql-request";

export const FIND_ARTICLE = gql`
  query FindArticle($id:ID!) {
    findArticle(id:$id) {
      _id
      data{
        title
        slug
        content
        category
        description
        meta
        tags{
          uid
          text
        }
        author
        thumbnail{
          uid
          src
          alt
          }
        seo{
          title
          href
          description
          image{
            uid
            src
            alt
          }
        }
      }
      site
      updateDate{
        createdAt
        register{
          uid
          change
          updatedAt
        }
      }
    }
  }
`;

export const FIND_ARTICLES = gql`
  query FindArticles {
    findArticles {
      _id
      site
    }
  }
`;

