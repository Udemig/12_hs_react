import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* 
 * Asenkron Thunk Aksiyonu
 * createAsyncThunk: yhunk aksiyonu oluşturmaya yarar
 * 2 parametre alır:
 * 1) aksiyonun type'ı
 * 2) aksiyonun payload'ını return eden fonksiyon
  

 */

export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // api'dan kullanıcı veilerini al
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload'ı retun edilmeli
  return res.data.users;
});

/*
 * Biz sadece api isteğini atıyoruz ve return edilmesi gerekn payloadı belirliyoruz.
 * Ardından createAsyncThunk ile oluşturulan aksiyonu tetiklediğimizde.
 * Otomatik olarak:
 * Api isteği atıldığı anda *pending* aksiyonu tetiklenir
 * Api isteği başarısız olursa *rejected* aksiyonu tetiklenir
 * Api isteği başarılı olursa *fulfilled* aksiyonu tetiklenir

*/
