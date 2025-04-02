import axios from "axios";
import { AuthResponse } from "../types";

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

// her api isteğinden cevap gelince çalışıcak bir arayazılım
// eğer gelen cevap 401 unothorized ise yani access tokenın süresi dolduysa
// refresh endpointine istek atıp access tokenı yenile
// 401 hatası aldığı isteği tekrar gönder
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log("arayazılım hataı yakaladı", err);
    // hatayı aldığımız api isteğini sakla
    const originalReq = err.config;

    // eğer hatanın kodu 401 ise yani access tokenın süresi dolduysa
    if (
      err.response.status === 401 &&
      !originalReq._retry &&
      err.response.data.message === "Access token expired"
    ) {
      originalReq._retry = true;

      // acccess tokenı yenile
      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        console.log("access tokenı yeniledi", res);

        // yenilenen access token ile orjinal isteği tekrar at
        return api(originalReq);
      } catch (err) {
        console.log("access tokenı yenileme hatası", err);
        // refresh tokenın süresi dolduysa
        await api.post("/auth/logout");

        // login sayfasına yönlendir
        window.location.href = "/login";

        // yeni bir hata aldığında hata döndür
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
