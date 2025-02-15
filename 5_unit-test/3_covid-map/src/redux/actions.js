import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk("covid/getDetails", async (country) => {
  // ülke covid verilerini alıcak api isteğini hazılrla
  const req1 = detailApi.get("/statistics", { params: { country } });

  // ülke verilerini alıcak api isteğini hazırla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

  // iki api isteğinide aynı anda at
  const [res1, res2] = await Promise.all([req1, req2]);

  // ihticaımız olan verileri al
  const covid = res1.data.response[0];
  const countryData = res2.data[0];

  const data = {
    continent: covid.continent,
    country: covid.country,
    capital: countryData.capital[0],
    // nesnenin ilk elemanına doğrudan ulaşamıyoruz o yüzden önce diziye çevirip sonra ilk elemanı alıyoruz
    currency: Object.entries(countryData.currencies)[0][1].name,
    day: covid.day,
    cases: covid.cases.total,
    deaths: covid.deaths.total,
    tests: covid.tests.total,
    population: covid.population,
    flag: countryData.flags,
  };

  // payload'ı reuturn et
  return data;
});
