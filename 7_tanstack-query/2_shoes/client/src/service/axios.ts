import axios from "axios";

const api = axios.create({
  // api'nin adresi
  baseURL: "http://localhost:5000/api",
  // cookie ile sakalanana verileri her istekte api'a gönderir
  withCredentials: true,
  // api'ye gönderilen verilerin tipi
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
