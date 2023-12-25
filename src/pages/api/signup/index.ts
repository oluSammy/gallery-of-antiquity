import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import Authentication from "@/services/authentication";
import { apiHandler } from "../apiHandler";

async function signUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const AuthService = new Authentication();

  const { firstName, lastName, email, password, phoneNumber, confirmPassword } =
    req.body;

  const data = await AuthService.signUp(
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    confirmPassword
  );

  // console.log("DATA", data);

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: signUp,
});
