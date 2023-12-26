import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import Authentication from "@/services/authentication";
import { apiHandler } from "../apiHandler";

async function forgotPassword(req: NextApiRequest, res: NextApiResponse) {
  const AuthService = new Authentication();

  const { email } = req.body;

  const data = await AuthService.forgotPassword(email as string);

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: forgotPassword,
});
