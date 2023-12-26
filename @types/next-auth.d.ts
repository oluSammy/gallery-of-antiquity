import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      data: {
        firstName: string;
        lastName: string;
        email: string;
        profilePic: string;
        isActive: boolean;
        id: string;
      };
    };
  }
}
