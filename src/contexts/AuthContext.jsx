"use client";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [USER_INFO, SET_USER_INFO] = useState(null);
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      fetch("http://77.237.82.221:8000/accounts/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            throw new Error("Unauthorized");
          }
          return response.json();
        })
        .then((data) => {
          SET_USER_INFO(data);
          SET_ACCESS_TOKEN(token);
        })
        .catch((error) => {
          localStorage.removeItem("ACCESS_TOKEN");
          SET_ACCESS_TOKEN(null);
          SET_USER_INFO(null);
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
        SET_USER_INFO,
        ACCESS_TOKEN,
        SET_ACCESS_TOKEN,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
