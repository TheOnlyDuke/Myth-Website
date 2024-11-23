"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./MUIStylesConfig";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    const theme = isDarkMode ? darkTheme : lightTheme;
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    document.documentElement.style.setProperty(
      "--primary-text",
      theme.palette.text.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-text",
      theme.palette.text.secondary
    );
    document.documentElement.style.setProperty(
      "--active-text",
      theme.palette.custom.activeText
    );
    document.documentElement.style.setProperty(
      "--secondary-active-text",
      theme.palette.custom.secActiveText
    );
    document.documentElement.style.setProperty(
      "--active-BG",
      theme.palette.custom.activeBG
    );
    document.documentElement.style.setProperty(
      "--third-active-BG",
      theme.palette.custom.thirdActiveBG
    );
    document.documentElement.style.setProperty(
      "--not-active-BG",
      theme.palette.custom.notActiveBG
    );
    document.documentElement.style.setProperty(
      "--black-BG",
      theme.palette.custom.blackBG
    );
    document.documentElement.style.setProperty(
      "--footer-BG",
      theme.palette.custom.footerBG
    );
    document.documentElement.style.setProperty(
      "--border",
      theme.palette.custom.border
    );
    document.documentElement.style.setProperty(
      "--secondary-active-BG",
      theme.palette.custom.secActiveBG
    );

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
