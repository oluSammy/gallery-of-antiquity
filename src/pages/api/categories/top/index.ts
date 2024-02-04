import type { NextApiRequest, NextApiResponse } from "next";

import { apiHandler } from "../../apiHandler";
import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  const { categoryName } = req.body;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.createTopCategory(
    result?.user.accessToken || "",
    categoryName
  );

  return res.status(StatusCodes.CREATED).json(data);
}

export default apiHandler({
  POST: handler,
});
