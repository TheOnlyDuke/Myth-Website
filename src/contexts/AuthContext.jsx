"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { apiClient } from "@/utils/api";
import { cookieStorage } from "@/utils/cookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [USER_INFO, SET_USER_INFO] = useState(null);
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateAuth = (token, userInfo) => {
    SET_ACCESS_TOKEN(token);
    SET_USER_INFO(userInfo);
    cookieStorage.setToken(token);
    cookieStorage.setUserInfo(userInfo);
  };

  const clearAuth = () => {
    SET_ACCESS_TOKEN(null);
    SET_USER_INFO(null);
    cookieStorage.clearAuth();
  };

  useEffect(() => {
    const token = cookieStorage.getToken();
    const userInfo = cookieStorage.getUserInfo();

    if (token && userInfo) {
      // Set initial state from cookies
      SET_ACCESS_TOKEN(token);
      SET_USER_INFO(userInfo);

      // Verify token in background
      apiClient
        .getProfile(token)
        .catch(() => {
          clearAuth();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        USER_INFO,
        SET_USER_INFO: (userInfo) => {
          SET_USER_INFO(userInfo);
          if (userInfo) {
            cookieStorage.setUserInfo(userInfo);
          }
        },
        ACCESS_TOKEN,
        SET_ACCESS_TOKEN: (token) => {
          SET_ACCESS_TOKEN(token);
          if (token) {
            cookieStorage.setToken(token);
          }
        },
        updateAuth,
        clearAuth,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
