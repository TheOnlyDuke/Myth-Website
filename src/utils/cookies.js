import Cookies from "js-cookie";

const TOKEN_NAME = "auth_token";
const USER_INFO_NAME = "user_info";

export const cookieOptions = {
  expires: 7, // faghat baraye mesal hast va bayad taghir peyda kone
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
};

export const cookieStorage = {
  setToken: (token) => {
    Cookies.set(TOKEN_NAME, token, cookieOptions);
  },

  getToken: () => {
    return Cookies.get(TOKEN_NAME);
  },

  setUserInfo: (userInfo) => {
    Cookies.set(USER_INFO_NAME, JSON.stringify(userInfo), cookieOptions);
  },

  getUserInfo: () => {
    const userInfo = Cookies.get(USER_INFO_NAME);
    return userInfo ? JSON.parse(userInfo) : null;
  },

  clearAuth: () => {
    Cookies.remove(TOKEN_NAME);
    Cookies.remove(USER_INFO_NAME);
  },
};
