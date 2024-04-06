import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "@/pages/api/apiHandler";

async function getOneTopCategory(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.getOneTopCategory(
    result?.user.accessToken || "",
    id as string
  );

  return res.status(StatusCodes.CREATED).json(data);
}

async function updateTopCategory(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoriesService();

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await categoryService.updateTopCategory(
    result?.user.accessToken || "",
    id as string,
    req.body
  );

  return res.status(StatusCodes.CREATED).json(data);
}

export default apiHandler({
  GET: getOneTopCategory,
  PUT: updateTopCategory,
});
