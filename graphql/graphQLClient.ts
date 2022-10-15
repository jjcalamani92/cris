import { GraphQLClient } from "graphql-request";
import { CREATE_USER } from "./mutate";
import { FIND_USER_BY_EMAIL } from "./query";

export const graphQLClient = new GraphQLClient(
  `${process.env.API_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);


export const oAUthToDbUser = async( oAuthEmail: string, oAuthUserName: string, oAuthPicture: string, aAuthProvider:string ) => {
  try {
    const { findUserByEmail } = await graphQLClient.request(
      FIND_USER_BY_EMAIL,
      { email: oAuthEmail }
    );
    if ( findUserByEmail ) {
        const { _id, data, email } = findUserByEmail;
        const { username, role, image } = data
        return { sid:_id, username, role, image };
    } 
  } catch (error) {
    console.log(error);
    
  }

    const { createUser } = await graphQLClient.request(CREATE_USER, { input: { email: oAuthEmail.toLowerCase(), username: oAuthUserName.toLowerCase(), password: '@@@@@@', role: 'USER_ROL', image: oAuthPicture, site: '1234567', oAuth: aAuthProvider } })
      const { _id, data, email } = createUser;
      const { username, role, image } = data;
      const { src } = image;
  
    return { sid:_id, username, email, role, image: src }; 
  

}