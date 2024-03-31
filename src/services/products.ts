import { callApi } from "@/utils/callApi";
import { NextApiRequest } from "next";

class ProductService {
  // Top Categories
  async createProduct(apiKey: string, body: any) {
    const size = body.size
      .split(",")
      .map((item: string, index: number) => item);

    await callApi({
      apiPath: "product",
      apiKey,
      body: { ...body, size },
      method: "POST",
    });
  }

  async getProducts(apiKey: string, query: Record<string, any>) {
    return await callApi({
      apiPath: "product",
      apiKey,
      queryParameters: query,
      method: "GET",
    });
  }

  async getOutOfStockProducts(apiKey: string, query: Record<string, any>) {
    return await callApi({
      apiPath: "product/out-of-stock",
      apiKey,
      queryParameters: query,
      method: "GET",
    });
  }
}

export default ProductService;
