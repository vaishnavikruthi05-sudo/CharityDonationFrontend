import axios from "axios";

// Create axios instance with backend URL
export const API = axios.create({
  baseURL: "http://localhost:5000", // your backend URL
});

// Add token to headers if exists
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
