import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET,

    callbacks: {
        async jwt(data) {
          // Persist the OAuth access_token to the token right after signin

          const { token, user, account } = data
        
          if (account) {
            token.id_token = account.id_token;
          }
          return token;
        },
        async session({ session, token }) {
          // Send properties to the client, like an access_token from a provider.
          session.auth_token = token.id_token;
          return session;
        },
      },
})