import Authentication from "@/services/authentication";
import { decode } from "jsonwebtoken";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET || "secret",
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const Auth = new Authentication();

          const user = await Auth.signIn(
            credentials?.email,
            credentials?.password
          );

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user;

      if (session && session.user) {
        try {
          const { exp } = decode(session.user.accessToken) as any;

          if (exp < (new Date().getTime() + 1) / 1000) {
            return null;
          }
        } catch (error) {
          return null;
        }
      }

      return session;
    },

    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
