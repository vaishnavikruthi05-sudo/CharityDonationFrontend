import axios from "axios";

const API = axios.create({
  baseURL: "https://charity-backend-b1tc.onrender.com",
});

export default API;

