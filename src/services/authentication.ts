import { callApi } from "@/utils/callApi";

class Authentication {
  async signIn(email?: string, password?: string) {
    console.log("emailino", { password, email });

    const res = (await callApi({
      apiPath: "/auth/login",
      method: "POST",
      body: { email, password },
    })) as any;

    if (
      res.status.toString().startsWith("4") ||
      res.status.toString().startsWith("5")
    ) {
      throw res;
    }

    return res;
  }

  async signUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    passwordConfirm: string
  ) {
    const res = await callApi({
      apiPath: "/auth/signup",
      method: "POST",
      body: {
        firstName,
        lastName,
        email,
        password,
        phoneNumber: phoneNumber.toString(),
        passwordConfirm,
      },
    });

    return res;
  }

  async getEmailVerificationToken(email: string) {
    const res = await callApi({
      apiPath: `auth/token/${email}`,
      method: "GET",
    });

    return res;
  }

  async forgotPassword(email: string) {
    const res = await callApi({
      apiPath: `auth/forgot-password`,
      method: "POST",
      body: { email },
    });

    return res;
  }

  async resetPassword(
    password: string,
    passwordConfirm: string,
    token: string
  ) {
    const res = await callApi({
      apiPath: `auth/reset-password/${token}`,
      method: "POST",
      body: { password, passwordConfirm },
    });

    return res;
  }

  async changePassword(
    password: string,
    previousPassword: string,
    passwordConfirm: string,
    email: string,
    apiKey: string
  ) {
    const res = await callApi({
      apiPath: `auth/change-password`,
      method: "POST",
      body: {
        email,
        previousPassword,
        newPassword: password,
        passwordConfirm: passwordConfirm,
      },
      apiKey,
    });

    return res;
  }
}

export default Authentication;
