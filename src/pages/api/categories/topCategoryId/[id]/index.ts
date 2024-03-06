import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "@/pages/api/apiHandler";

async function getCategoriesByTopCategoryId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categoryService = new CategoriesService();
  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.getCategoriesByTopCategoryId(
    result?.user.accessToken || "",
    id as string
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  GET: getCategoriesByTopCategoryId,
});
