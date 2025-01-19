import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // parametreleri belirle
  const params = {
    bl_lat: "34.488131",
    bl_lng: "25.479116",
    tr_lat: "42.940058",
    tr_lng: "44.79308",
    speed: "2,99999",
  };

  // api isteğini at
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen veride dizi içerisinde dizi olduğundan projede kullanımı daha kolay olsun diye dizinin içerisindeki dizileri nesnelere çevir
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  // slice'a aktarılacak payload'ı belirle
  return formatted;
});

// TODO SLICE'I GÜNCELLE
