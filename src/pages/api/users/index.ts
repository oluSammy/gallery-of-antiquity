import type { NextApiRequest, NextApiResponse } from "next";

import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "../apiHandler";
import Authentication from "@/services/authentication";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const authService = new Authentication();

  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await authService.getAllUsers(
    result?.user.accessToken || "",
    req.query
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  GET: getUsers,
});
