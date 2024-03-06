import { callApi } from "@/utils/callApi";
import { NextApiRequest } from "next";

class CategoriesService {
  // Top Categories
  async createTopCategory(apiKey: string, categoryName: string) {
    await callApi({
      apiPath: "product-type",
      apiKey,
      body: {
        productType: categoryName,
        inStock: true,
      },
      method: "POST",
    });
  }

  async getTopCategories(apiKey: string, query: Record<string, any>) {
    return await callApi({
      apiPath: "product-type",
      apiKey,
      queryParameters: query,
    });
  }

  async getOneTopCategory(apiKey: string, id: string) {
    return await callApi({
      apiPath: `product-type/${id}`,
      apiKey,
    });
  }

  async updateTopCategory(
    apiKey: string,
    id: string,
    body: Record<string, any>
  ) {
    return await callApi({
      apiPath: `product-type/${id}`,
      apiKey,
      body,
      method: "PUT",
    });
  }

  // categories
  async getCategories(apiKey: string, query: Record<string, any>) {
    return await callApi({
      apiPath: "product-categories",
      apiKey,
      queryParameters: query,
    });
  }

  async createCategory(
    apiKey: string,
    categoryName: string,
    productTypeId: string
  ) {
    await callApi({
      apiPath: "product-categories",
      apiKey,
      body: {
        categoryName,
        productTypeId,
      },
      method: "POST",
    });
  }

  async getOneCategory(apiKey: string, id: string) {
    return await callApi({
      apiPath: `product-categories/${id}`,
      apiKey,
    });
  }

  async updateCategory(
    apiKey: string,
    id: string,
    body: Record<string, any>
    // topCategoryId: string
  ) {
    return await callApi({
      apiPath: `product-categories/${id}`,
      apiKey,
      body,
      method: "PATCH",
    });
  }

  async getCategoriesByTopCategoryId(apiKey: string, topCategoryId: string) {
    console.log(`product-categories/productFeat/${topCategoryId}`, "`product-categories/productFeat/${topCategoryId}`")
    return await callApi({
      apiPath: `product-categories/productFeat/${topCategoryId}`,
      apiKey,
    });
  }
}

export default CategoriesService;
