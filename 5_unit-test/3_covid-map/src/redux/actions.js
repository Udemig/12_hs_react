import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk("covid/getDetails", async (country) => {
  // ülke covid verilerini al
  const res1 = await detailApi.get("/statistics", { params: { country } });

  // console.log(res1.data.response[0]);

  // ülke verilerini al
  const res2 = await axios.get(`https://restcountries.com/v3.1/name/${country}`);

  console.log(res2.data[0]);

  //TODO istekler şuan birbiri ardına atıldığı için performans açığı yaratıyor bunun yerine paralalel olarak atılması gerekirdi

  return "PAYLOAD";
});
