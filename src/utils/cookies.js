import Cookies from "js-cookie";

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";
const USER_INFO = "user_info";

// Default cookie options (used for user info)
export const cookieOptions = {
  expires: 7, // Default: 7 days
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
};

export const cookieStorage = {
  // Sets access token with a solid 2-hour expiry
  setAccessToken: (token) => {
    Cookies.set(ACCESS_TOKEN, token, {
      ...cookieOptions,
      expires: 1 / 12, // 2 hours
    });
  },

  getAccessToken: () => {
    return Cookies.get(ACCESS_TOKEN);
  },

  // Sets refresh token with a 7-day expiry
  // To implement sliding expiration, call this method again whenever the refresh token is used
  setRefreshToken: (token) => {
    Cookies.set(REFRESH_TOKEN, token, {
      ...cookieOptions,
      expires: 7, // 7 days
    });
  },

  getRefreshToken: () => {
    return Cookies.get(REFRESH_TOKEN);
  },

  removeRefreshToken: () => {
    Cookies.remove(REFRESH_TOKEN);
  },

  setUserInfo: (userInfo) => {
    Cookies.set(USER_INFO, JSON.stringify(userInfo), cookieOptions);
  },

  getUserInfo: () => {
    const userInfo = Cookies.get(USER_INFO);
    return userInfo ? JSON.parse(userInfo) : null;
  },

  clearAuth: () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
    Cookies.remove(USER_INFO);
  },
};
