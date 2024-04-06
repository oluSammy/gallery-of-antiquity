import type { NextApiRequest, NextApiResponse } from "next";

import { auth } from "@/auth/auth";
import { StatusCodes } from "http-status-codes";
import { apiHandler } from "../../apiHandler";
import ProductService from "@/services/products";

async function getProductsStats(req: NextApiRequest, res: NextApiResponse) {
  const productService = new ProductService();

  const result = await auth(req, res);
  result?.user.accessToken || "";

  const data = await productService.getProductsStats(
    result?.user.accessToken || "",
    req.query
  );

  return res.status(StatusCodes.OK).json(data);
}

export default apiHandler({
  GET: getProductsStats,
});
