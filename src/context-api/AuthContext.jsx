import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Ensure this is correctly imported

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
const portainerToken = import.meta.env.VITE_PORTAINER_TOKEN;

export const AuthContext = createContext();

const setSessionStorage = (key, value, expirationInMinutes) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expirationInMinutes * 60 * 1000,
  };
  sessionStorage.setItem(key, JSON.stringify(item));
};

const getSessionStorage = (key) => {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    sessionStorage.removeItem(key);
    return null;
  }

  return item.value;
};

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(getSessionStorage("username") || "");
  const [role, setRole] = useState(getSessionStorage("role") || "");
  const [token, setToken] = useState(getSessionStorage("token") || null);

  const handleAuthentication = async (username, password) => {
    try {
      const response = await fetch(`${apiBaseURL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${portainerToken}`,
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse); // Log the error response
        throw new Error(errorResponse.message || "Invalid credentials");
      }

      const data = await response.json();
      console.log("Server response:", data);
      // Ensure the JWT is valid before decoding
      if (!data.jwt || typeof data.jwt !== "string") {
        throw new Error("Invalid token received from server.");
      }

      // Decode the JWT token (make sure the 'jwt' key matches your API response)
      const decodedToken = jwtDecode(data.jwt);

      // Save decoded data into state
      setUsername(decodedToken.username);
      setRole(decodedToken.role);
      setToken(data.jwt);

      // Store in session storage with 24-hour expiration (1440 minutes)
      setSessionStorage("token", data.jwt, 1440);
      setSessionStorage("username", decodedToken.username, 1440);
      setSessionStorage("role", decodedToken.role, 1440);
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ username, role, token, handleAuthentication }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
