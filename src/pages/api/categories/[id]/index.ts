import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "@/pages/api/apiHandler";

async function getOneCategory(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  console.log("HERE  1");

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.getOneCategory(
    result?.user.accessToken || "",
    id as string
  );

  return res.status(StatusCodes.CREATED).json(data);
}

async function updateCategory(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.updateCategory(
    result?.user.accessToken || "",
    id as string,
    req.body
  );

  return res.status(StatusCodes.CREATED).json(data);
}

export default apiHandler({
  GET: getOneCategory,
  PUT: updateCategory,
});
