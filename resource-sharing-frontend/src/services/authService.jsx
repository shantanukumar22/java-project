// import React from "react";
// const API_URL = "http://localhost:8080/api/auth"; // Backend URL

// export const registerUser = async (userData) => {
//   const response = await fetch(`${API_URL}/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const loginUser = async (credentials) => {
//   const response = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   });

//   const data = await response.json();
//   if (response.ok) {
//     localStorage.setItem("token", data.token); // Store token
//   }
//   return data;
// };

// export const logoutUser = () => {
//   localStorage.removeItem("token");
// };

import { jwtDecode } from "jwt-decode"; // Correct import for Vite

const API_URL = "http://localhost:8080/api/auth"; // Backend URL

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Registration failed");

    return response.json();
  } catch (error) {
    console.error("Error during registration:", error);
    return { error: "Registration failed" };
  }
};

// ✅ Login User & Store Token
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Login failed");

    localStorage.setItem("token", data.token); // Store JWT token
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    return { error: "Invalid email or password" };
  }
};

// ✅ Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// ✅ Get Token from Local Storage
export const getToken = () => localStorage.getItem("token");

// ✅ Decode JWT Token & Get Name
export const getEmailFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.sub || null; // ✅ Extract "sub" (email) from the token
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// ✅ Check if User is Authenticated
export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Check expiration time
  } catch (error) {
    return false;
  }
};
