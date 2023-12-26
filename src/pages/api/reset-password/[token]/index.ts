import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import Authentication from "@/services/authentication";
import { apiHandler } from "../../apiHandler";

async function resetPassword(req: NextApiRequest, res: NextApiResponse) {
  const AuthService = new Authentication();

  const { password, passwordConfirm } = req.body;
  const { token } = req.query;

  console.log({ token, password, passwordConfirm });

  const data = await AuthService.resetPassword(
    password,
    passwordConfirm,
    token as string
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: resetPassword,
});
