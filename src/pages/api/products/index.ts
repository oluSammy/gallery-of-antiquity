import type { NextApiRequest, NextApiResponse } from "next";

import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "../apiHandler";
import ProductService from "@/services/products";

async function createProduct(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json("");
}

async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  const productService = new ProductService();

  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await productService.getProducts(
    result?.user.accessToken || "",
    req.query
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  POST: createProduct,
  GET: getProducts,
});
