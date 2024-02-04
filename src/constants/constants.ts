export const constants = {
  backendApiBaseUrl: `${process.env.API_BASE_URL}`,
  API_BASE_URL: "/api",

  //Authentication Routes
  SIGN_IN: "/auth/login",
  SIGN_UP: "/signup",
  GET_EMAIL_VERIFICATION: (email: string) => `/verification/${email}`,
  RESET_PASSWORD: (token: string) => `/reset-password/${token}`,
  CHANGE_PASSWORD: "/change-password",
  CREATE_TOP_CATEGORY: "/categories/top",
};
