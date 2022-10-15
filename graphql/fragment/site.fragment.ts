import { gql } from "graphql-request";

export const PAGE2_FRAGMENT = gql`
  fragment page2 on Page2 {
    _id
    slug
    
  }

`;
export const PAGE1_FRAGMENT = gql`
  fragment page1 on Page1 {
    _id
    slug
    page{
      ...page2
    }
    
  }
  ${PAGE2_FRAGMENT}
`;
export const PAGE0_FRAGMENT = gql`
  fragment page0 on Page0 {
    _id
    slug
    data{
      type
      seo{
        title
        
      }
    }
    page{
      ...page1
    }
  }
  ${PAGE1_FRAGMENT}
`;
export const DATA_FRAGMENT = gql`
  fragment data on Data {
    name
    description
    type
    seo{
      title
    }
    dataBase{
      uid
      label
      value
    }
  }
`;

export const SITE_FRAGMENT = gql`
  fragment site on Site {
    _id
    url
    data {
      ...data
    }
  }
  ${DATA_FRAGMENT}
`;
// export const SITE_FRAGMENT_PATHS = gql`
//   fragment site on Site {
//     _id
//     data {
//       ...data
//     }
//     page {
//       ...page0
//     }

//   }
//   ${DATA_FRAGMENT}
//   ${PAGE0_FRAGMENT}
// `;

// export const SITE_FRAGMENT_SEO = gql`
//   fragment site on Site {
//     _id
//     data {
//       ...data
      
//     }
//     page {
//       ...page0
//     }

//   }
//   ${DATA_FRAGMENT}
//   ${PAGE0_FRAGMENT}
// `;
