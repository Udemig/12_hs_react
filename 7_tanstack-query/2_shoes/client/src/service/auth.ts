import { LoginValues, RegisterValues } from "../types";
import api from "./axios";

// auth ile alakalı bütün api istekleri
const authApi = {
  register: (data: RegisterValues) => api.post("/auth/register", data),
  login: (data: LoginValues) => api.post("/auth/login", data),
  refreshToken: () => api.post("/auth/refresh-token"),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get("/auth/me"),
};

export default authApi;
