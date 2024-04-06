import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesService from "@/services/category";
import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "@/pages/api/apiHandler";
import ProductService from "@/services/products";

async function getOneProduct(req: NextApiRequest, res: NextApiResponse) {
  const productService = new ProductService();

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await productService.getOneProduct(
    result?.user.accessToken || "",
    id as string
  );

  return res.status(StatusCodes.CREATED).json(data);
}

async function updateProduct(req: NextApiRequest, res: NextApiResponse) {
  const productService = new ProductService();

  const { id } = req.query;
  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await productService.updateProduct(
    result?.user.accessToken || "",
    id as string,
    req.body
  );

  return res.status(StatusCodes.CREATED).json(data);
}

export default apiHandler({
  GET: getOneProduct,
  PUT: updateProduct,
});
