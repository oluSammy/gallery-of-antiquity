import { callApi } from "@/utils/callApi";

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

  async getTopCategories(apiKey: string) {
    return await callApi({
      apiPath: "product-type",
      apiKey,
    });
  }

  async getOneTopCategory(apiKey: string, id: string) {
    return await callApi({
      apiPath: `product-type/${id}`,
      apiKey,
    });
  }

  async updateTopCategory(apiKey: string, id: string, categoryName: string) {
    return await callApi({
      apiPath: `product-type/${id}`,
      apiKey,
      body: {
        productType: categoryName,
      },
      method: "PUT",
    });
  }

  // categories
  async getCategories(apiKey: string) {
    return await callApi({
      apiPath: "product-categories",
      apiKey,
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
}

export default CategoriesService;
