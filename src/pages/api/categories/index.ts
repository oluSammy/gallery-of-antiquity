import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "../apiHandler";

async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  const { categoryName, productTypeId } = req.body;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.createCategory(
    result?.user.accessToken || "",
    categoryName,
    productTypeId
  );

  return res.status(StatusCodes.CREATED).json(data);
}

async function getCategories(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  console.log("HERE  5");

  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.getCategories(
    result?.user.accessToken || "",
    req.query
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: createCategory,
  GET: getCategories,
});
