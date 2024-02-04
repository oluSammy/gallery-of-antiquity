import { callApi } from "@/utils/callApi";

class CategoriesService {
  // Top Categories
  async createTopCategory(apiKey: string, categoryName: string) {
    await callApi({
      apiPath: "product/createProductFeat",
      apiKey,
      body: {
        productType: categoryName,
        inStock: true,
      },
      method: "POST",
    });
  }
}

export default CategoriesService;
