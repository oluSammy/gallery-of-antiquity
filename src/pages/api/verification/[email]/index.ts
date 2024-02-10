import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import Authentication from "@/services/authentication";
import { apiHandler } from "../../apiHandler";

async function getEmailVerification(req: NextApiRequest, res: NextApiResponse) {
  const AuthService = new Authentication();

  const { email } = req.query;

  const data = await AuthService.getEmailVerificationToken(email as string);

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  GET: getEmailVerification,
});
