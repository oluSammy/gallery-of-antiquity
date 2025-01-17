export const constants = {
  backendApiBaseUrl: `${process.env.API_BASE_URL}`,
  API_BASE_URL_LOCAL: `${process.env.API_BASE_URL_LOCAL}`,
  API_BASE_URL: "/api",

  //Authentication Routes
  SIGN_IN: "/auth/login",
  SIGN_UP: "/signup",
  GET_EMAIL_VERIFICATION: (email: string) => `/verification/${email}`,
  RESET_PASSWORD: (token: string) => `/reset-password/${token}`,
  CHANGE_PASSWORD: "/change-password",
  OUT_OF_STOCK_PRODUCTS: "/products/out-of-stock",
  TOP_CATEGORY: (id?: string) => {
    if (id) {
      return `/categories/top/${id}`;
    }
    return "/categories/top";
  },
  CATEGORY: (id?: string) => {
    if (id) {
      return `/categories/${id}`;
    }
    return "/categories";
  },
  PRODUCTS: (id?: string) => (id ? `/products/${id}` : "/products"),
  categoriesByTopCategoryId: (id: string) => `/categories/topCategoryId/${id}`,
  PRODUCTS_STATS: "/products/stats",
  USERS: (id?: string) => (id ? `/users/${id}` : "/users"),
};

export const dateTimeFormat = {
  full: "dd MMM yyyy @ HH:mm",
  date: "dd MMM yyyy",
  time: "HH:mm",
  timeAndTimezone: "HH:mm Z",
};
