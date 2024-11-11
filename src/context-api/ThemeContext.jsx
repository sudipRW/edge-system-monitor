import React, { createContext, useState, useEffect, useCallback } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purpleTheme,blueTheme } from "../theme/defaultThemes";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(blueTheme);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await fetch("http://localhost:3000/theme");
        const themeData = await response.json();
        const muiTheme = createTheme(themeData);
        setTheme(muiTheme);
      } catch (error) {
        console.error("Error fetching theme:", error);
      }
    };

    // fetchTheme();
  }, []);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch("http://localhost:3000/logo");

        if (!response.ok) {
          throw new Error("Failed to fetch logo");
        }

        // Parse the response as JSON
        const logoData = await response.json(); // Expecting the logo in a JSON object

        // Set the logo using the logo property from the fetched object
        setLogo(logoData.logo); // Access the base64 string from the logo property
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    // fetchLogo();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        logo,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

