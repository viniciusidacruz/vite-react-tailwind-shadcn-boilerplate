import axios from "axios";

export const BASE_API = axios.create({
  baseURL: "https://api.github.com",
});
