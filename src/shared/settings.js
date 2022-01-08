import axios from "axios";
import { baseUrl } from "./apiUrls";

export const request = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});
