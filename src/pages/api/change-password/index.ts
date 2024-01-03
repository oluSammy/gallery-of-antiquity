import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import Authentication from "@/services/authentication";
import { apiHandler } from "../apiHandler";
import { auth } from "@/app/api/auth/[...nextauth]/route";

async function changePassword(req: NextApiRequest, res: NextApiResponse) {
  const AuthService = new Authentication();

  const { previousPassword, password, passwordConfirm, email } = req.body;

  const result = await auth(req, res);

  const data = await AuthService.changePassword(
    password,
    previousPassword,
    passwordConfirm,
    email,
    result?.user.accessToken || ""
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: changePassword,
});
