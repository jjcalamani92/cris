import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { oAUthToDbUser } from "../../../graphql";



export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    // Credentials({
      
    //   name: "crisCRM",
    //   credentials: {
    //     email: { label: "email", type: "email", placeholder: " hola@hola.com" },
    //     password: {
    //       label: "password",
    //       type: "password",
    //       placeholder: " 123fgt",
    //     },
    //   },
    //   async authorize(credentials) {
    //     return null
    //   }
    // }),
    // ...add more providers here
  ],
  pages:{
    signIn: '/auth/login',
    // newUser: '/auth/register'
  },
  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400,
  },
  //Callbacks
  callbacks: {
    async jwt({token, account, user}) {
      if (account) {
        token.accessToken = account.access_token;
        switch( account.type ){
          case 'oauth':
            const data = await oAUthToDbUser(user?.email || '', user?.name || '', user?.image|| '', account?.provider|| '')
            token.user = data
            token.role = data.role
          break
          case 'credentials':
            token.user = user;
          break
        }
      }
      return token
    },
    async session({session, token, user}) {
      session.accessToken = token.accessToken;
      session.user = token.user as any
      return  session
    }
  }
});

