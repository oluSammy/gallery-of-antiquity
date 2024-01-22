import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.AUTH_SECRET,
});

export const config = {
  matcher: [
    "/about",
    "/visit",
    "/group-ticket",
    "/books",
    "/souvenir",
    "/pictures",
  ],
};
